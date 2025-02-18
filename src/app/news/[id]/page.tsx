import SectionTitle from "@/components/SectionTitle";
import ClientNewsDetail from "@/components/_clientComponents/ClientNewsDetail";

import GetApi from "@/utils/getApi";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const newsList = await GetApi.getNews({
    page: "1",
    limit: "5",
    search: "",
  });

  return (
    newsList.data.list.map((value) => ({
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

  const newsDetail = await GetApi.getNewsDetail({
    id,
    config: {
      next: { tags: [`news-${id}`] },
    },
  });

  return (
    <section className="common-layout">
      <SectionTitle
        title="본당소식 상세"
        items={[
          { id: 0, title: "본당소식", path: "/news" },
          { id: 1, title: "본당소식 상세", path: `/news/${id}` },
        ]}
      />
      <ClientNewsDetail id={id} data={newsDetail} />
    </section>
  );
}
