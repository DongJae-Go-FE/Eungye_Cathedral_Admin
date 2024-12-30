import { notFound } from "next/navigation";

import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import Button from "@/components/Button";
import EditButton from "@/components/_clientComponents/_btn/EditButton";
import Input from "@/components/Input";

import TextEditor from "@/components/_clientComponents/TextEditor";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

import { RequestGetDetailType } from "@/type";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/notices/${id}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  );

  if (response.status === 404) {
    notFound();
  }

  const data: RequestGetDetailType = await response.json();

  return (
    <section className="common-layout">
      <SectionTitle
        title="공지사항 수정"
        items={[
          { id: 0, title: "공지사항", path: "/notices" },
          { id: 1, title: "공지사항 수정", path: `/notices/${id}/edit` },
        ]}
      />
      <form action="">
        <table className="description-table">
          <caption>공지사항 수정 테이블</caption>
          <tbody>
            <tr>
              <th>
                <label htmlFor="title">제목</label>
              </th>
              <td colSpan={3}>
                <Input
                  value={data.title}
                  type="text"
                  id="title"
                  placeholder="제목을 입력해주세요."
                  maxLength={50}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td colSpan={3}>
                <TextEditor defaultValue={data.content} />
              </td>
            </tr>
            <tr>
              <th>사진 파일</th>
              <td colSpan={3}>
                <ImageUpload />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex justify-end gap-x-1">
          <EditButton id={id} href="/notices" />
          <Button color="white" href={`/notices/${id}`}>
            취소
          </Button>
        </div>
      </form>
    </section>
  );
}
