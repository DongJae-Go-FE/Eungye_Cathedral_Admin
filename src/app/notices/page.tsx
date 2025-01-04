import SectionTitle from "@/components/SectionTitle";
import ClientNoticeTable from "@/components/_clientComponents/ClientNoticeTable";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="공지사항"
        items={[{ id: 0, title: "공지사항", path: "/notices" }]}
      />
      <ClientNoticeTable />
    </div>
  );
}
