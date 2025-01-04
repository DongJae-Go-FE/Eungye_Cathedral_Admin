import SectionTitle from "@/components/SectionTitle";
import ClientWeeklysAdd from "@/components/_clientComponents/ClientWeeklysAdd";

export default async function Page() {
  return (
    <section className="common-layout">
      <SectionTitle
        title="주보 등록"
        items={[
          { id: 0, title: "주보", path: "/weeklys" },
          { id: 1, title: "주보 등록", path: `/weeklys/add` },
        ]}
      />
      <ClientWeeklysAdd />
    </section>
  );
}
