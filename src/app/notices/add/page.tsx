import SectionTitle from "@/components/SectionTitle";
import ClientNoticesAdd from "@/components/_clientComponents/ClientNoticesAdd";

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
      <ClientNoticesAdd />
    </section>
  );
}
