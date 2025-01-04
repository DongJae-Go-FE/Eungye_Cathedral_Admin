import SectionTitle from "@/components/SectionTitle";

import ClientWeeklysTable from "@/components/_clientComponents/ClientWeeklysTable";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="주보"
        items={[{ id: 0, title: "주보", path: "/weeklys" }]}
      />
      <ClientWeeklysTable />
    </div>
  );
}
