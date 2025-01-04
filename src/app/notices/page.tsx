import SectionTitle from "@/components/SectionTitle";
import ClientNoticesTable from "@/components/_clientComponents/ClientNoticesTable";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="공지사항"
        items={[{ id: 0, title: "공지사항", path: "/notices" }]}
      />
      <ClientNoticesTable />
    </div>
  );
}
