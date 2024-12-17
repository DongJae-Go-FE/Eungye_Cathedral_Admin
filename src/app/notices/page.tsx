import SectionTitle from "@/components/_serverComponents/SectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";

export default async function Page() {
  return (
    <main>
      <div className="common-layout">
        <SectionTitle
          title="공지사항"
          items={[{ id: 0, title: "공지사항", path: "/notices" }]}
        />
        <FormSearch />
      </div>
    </main>
  );
}
