"use server";

import { revalidatePath } from "next/cache";

const handleAdd = async (_: unknown, formData: FormData) => {
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const imgUrl = formData.get("imageUrl")?.toString();
  const hrefData = formData.get("path")?.toString();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}${hrefData}`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          title,
          content,
          imgUrl,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`등록 실패: ${response.statusText}`);
    }

    return {
      status: true,
    };
  } catch (e) {
    return {
      status: false,
      error: `${e}`,
    };
  }
};

const handleEdit = async (_: unknown, formData: FormData) => {
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const imgUrl = formData.get("imageUrl")?.toString();
  const hrefData = formData.get("path")?.toString();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}${hrefData}`,
      {
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          title,
          content,
          imgUrl,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`등록 실패: ${response.statusText}`);
    }

    return {
      status: true,
    };
  } catch (e) {
    return {
      status: false,
      error: `${e}`,
    };
  }
};

const handleDelete = async (_: unknown, formData: FormData) => {
  const hrefData = formData.get("path")?.toString();
  const idData = formData.get("id")?.toString();

  if (!idData) {
    return {
      status: false,
      error: "삭제할 정보가 없습니다.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}${hrefData}/${Number(idData)}`,
      {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json;charset=utf-8",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`삭제 요청 실패: ${response.statusText}`);
    }

    revalidatePath(`${hrefData}/${idData}`);

    return {
      status: true,
      redirectUrl: hrefData,
    };
  } catch (e) {
    return {
      status: false,
      error: `${e}`,
    };
  }
};

export { handleAdd, handleEdit, handleDelete };
