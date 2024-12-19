import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import Button from "@/components/Button";
import AddButton from "@/components/_clientComponents/_btn/AddButton";
import Input from "@/components/Input";

export default async function Page() {
  return (
    <section className="common-layout">
      <SectionTitle
        title="주보 등록"
        items={[
          { id: 0, title: "주보", path: "/weeklys" },
          { id: 1, title: "주보 등록", path: `/weeklys/add` },
        ]}
      />
      <form action="">
        <table className="description-table">
          <caption>주보 등록 테이블</caption>
          <tbody>
            <tr>
              <th>
                <label htmlFor="title">제목</label>
              </th>
              <td>
                <Input
                  type="text"
                  id="title"
                  placeholder="제목을 입력해주세요."
                  maxLength={50}
                />
              </td>
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
          <AddButton href="/weeklys" />
          <Button color="white" href="/weeklys">
            취소
          </Button>
        </div>
      </form>
    </section>
  );
}
