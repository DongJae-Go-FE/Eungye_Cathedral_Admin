import SectionTitle from "@/components/SectionTitle";
import ClientWeeklysDetail from "@/components/_clientComponents/ClientWeeklysDetail";

import GetApi from "@/utils/getApi";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const weeklysList = await GetApi.getWeeklys({
    page: "1",
    limit: "10",
    search: "",
  });

  return (
    weeklysList.data.list.map((value) => ({
      id: value.id.toString(),
    })) || []
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const weeklyDetail = await GetApi.getWeeklysDetail({
    id,
    config: {
      next: { tags: [`news-${id}`] },
    },
  });

  return (
    <section className="common-layout">
      <SectionTitle
        title="주보 상세"
        items={[
          { id: 0, title: "주보", path: "/weeklys" },
          { id: 1, title: "주보 상세", path: `/weeklys/${id}` },
        ]}
      />
      <ClientWeeklysDetail id={id} data={weeklyDetail} />
    </section>
  );
}
