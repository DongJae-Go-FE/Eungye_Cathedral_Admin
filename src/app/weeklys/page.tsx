import SectionTitle from "@/components/_serverComponents/SectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";

export default async function Page() {
  return (
    <main>
      <div className="common-layout">
        <SectionTitle
          title="주보"
          items={[{ id: 0, title: "주보", path: "/weeklys" }]}
        />
        <FormSearch />
      </div>
    </main>
  );
}
