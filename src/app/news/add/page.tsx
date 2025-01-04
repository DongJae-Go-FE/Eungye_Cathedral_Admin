import SectionTitle from "@/components/SectionTitle";
import ClientNewsAdd from "@/components/_clientComponents/ClientNewsAdd";

export default async function Page() {
  return (
    <section className="common-layout">
      <SectionTitle
        title="본당소식 등록"
        items={[
          { id: 0, title: "본당소식", path: "/news" },
          { id: 1, title: "본당소식 등록", path: `/news/add` },
        ]}
      />
      <ClientNewsAdd />
    </section>
  );
}
