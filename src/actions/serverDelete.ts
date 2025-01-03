"use server";

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

export { handleDelete };
