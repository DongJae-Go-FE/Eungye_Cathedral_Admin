import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";

import Table from "@/components/Table";
import { TableColumn } from "@/components/Table/Table";

export default async function Page() {
  const columns: TableColumn[] = [
    {
      key: "testa",
      title: "testa",
    },
    {
      key: "testb",
      title: "testb",
    },
    {
      key: "testc",
      title: "testc",
    },
  ];

  const data = [
    { testa: "asd", testb: "Asd", testc: "asdasdads" },
    { testa: "asd", testb: "Asd", testc: "asdasdads" },
    { testa: "asd", testb: "Asd", testc: "asdasdads" },
  ];

  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <FormSearch />
      <div className="mt-4 flex justify-end">
        <Button href="/news/add">등록하기</Button>
      </div>
      <Table caption="테스트" columns={columns} initialData={data} />
    </div>
  );
}
