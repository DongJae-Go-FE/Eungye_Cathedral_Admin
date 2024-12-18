import SectionTitle from "@/components/_serverComponents/SectionTitle";
import Button from "@/components/Button";
import DeleteButton from "@/components/_clientComponents/_btn/DeleteButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="common-layout">
      <SectionTitle
        title="주보 상세"
        items={[
          { id: 0, title: "주보", path: "/weeklys" },
          { id: 1, title: "주보 상세", path: `/weeklys/${id}` },
        ]}
      />

      <table className="description-table">
        <caption>주보 상세 테이블</caption>
        <tbody>
          <tr>
            <th>제목</th>
            <td></td>
            <th>생성일</th>
            <td></td>
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <th>사진 파일</th>
            <td colSpan={3}></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button color="black" href={`/weeklys/${id}/edit`}>
          수정
        </Button>
        <DeleteButton id={id} href="/weeklys" />
        <Button color="white" href="/weeklys">
          목록으로
        </Button>
      </div>
    </section>
  );
}