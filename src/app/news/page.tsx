import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";

import Table from "@/components/Table";
import { TableColumn } from "@/components/Table/Table";

export default async function Page() {
  const columns: TableColumn[] = [
    {
      key: "testa",
      title: "No",
      width: "10%",
    },
    {
      key: "testb",
      title: "제목",
      width: "30%",
    },
    {
      key: "testc",
      title: "메시지",
      width: "60%",
    },
  ];

  const data = [
    { testa: "1", testb: "hi", testc: "안녕하세요." },
    { testa: "2", testb: "nice", testc: "반갑습니다." },
    { testa: "3", testb: "good", testc: "안녕" },
  ];

  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <FormSearch />
      <div className="mt-4 mb-2 flex justify-end">
        <Button size="sm" color="white" href="/news/add">
          등록
        </Button>
      </div>
      <Table caption="테스트" columns={columns} initialData={data} />
    </div>
  );
}
