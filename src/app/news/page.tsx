import SectionTitle from "@/components/_serverComponents/SectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";

export default async function Page() {
  return (
    <main>
      <div className="common-layout">
        <SectionTitle
          title="본당소식"
          items={[{ id: 0, title: "본당소식", path: "/news" }]}
        />
        <FormSearch />
      </div>
    </main>
  );
}
