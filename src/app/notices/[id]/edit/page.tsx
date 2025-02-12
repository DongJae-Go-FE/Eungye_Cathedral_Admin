import SectionTitle from "@/components/SectionTitle";
import ClientNoticesEdit from "@/components/_clientComponents/ClientNoticesEdit";

import GetApi from "@/utils/getApi";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const noticeList = await GetApi.getNotices({
    page: "1",
    limit: "10",
    search: "",
  });

  return (
    noticeList.data.list.map((value) => ({
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

  const noticesDetail = await GetApi.getNoticesDetail({
    id,
    config: {
      next: { tags: [`notices-${id}`] },
    },
  });

  return (
    <section className="common-layout">
      <SectionTitle
        title="공지사항 수정"
        items={[
          { id: 0, title: "공지사항", path: "/notices" },
          { id: 1, title: "공지사항 수정", path: `/notices/${id}/edit` },
        ]}
      />
      <ClientNoticesEdit id={id} data={noticesDetail} />
    </section>
  );
}
