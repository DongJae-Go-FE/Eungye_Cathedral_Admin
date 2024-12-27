import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";

import ClientNewsTable from "@/components/_clientComponents/ClientNewsTable";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <FormSearch />
      <div className="mb-2 mt-4 flex justify-end">
        <Button size="sm" color="white" href="/news/add">
          등록
        </Button>
      </div>
      <ClientNewsTable />
    </div>
  );
}
