import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import Button from "@/components/Button";
import AddButton from "@/components/_clientComponents/_btn/AddButton";
import Input from "@/components/Input";

import TextEditor from "@/components/_clientComponents/TextEditor";

export default async function Page() {
  return (
    <section className="common-layout">
      <SectionTitle
        title="공지사항 등록"
        items={[
          { id: 0, title: "공지사항", path: "/notices" },
          { id: 1, title: "공지사항 등록", path: `/notices/add` },
        ]}
      />
      <form action="">
        <table className="description-table">
          <caption>공지사항 등록 테이블</caption>
          <tbody>
            <tr>
              <th>
                <label htmlFor="title">제목</label>
              </th>
              <td colSpan={3}>
                <Input
                  type="text"
                  id="title"
                  placeholder="제목을 입력해주세요."
                  maxLength={50}
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td colSpan={3}>
                <TextEditor />
              </td>
            </tr>
            <tr>
              <th>사진 파일</th>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex justify-end gap-x-1">
          <AddButton href="/notices" />
          <Button color="white" href="/notices">
            취소
          </Button>
        </div>
      </form>
    </section>
  );
}
