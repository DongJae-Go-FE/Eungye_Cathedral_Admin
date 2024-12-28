import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";

import ClientNewsTable from "@/components/_clientComponents/ClientNewsTable";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <ClientNewsTable />
    </div>
  );
}
