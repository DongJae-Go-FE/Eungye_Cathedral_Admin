import SectionTitle from "@/components/SectionTitle";
import ClientNoticesTable from "@/components/_clientComponents/ClientNoticesTable";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notices"],
    queryFn: () => GetList.getNotices({ page: "1", limit: "10", search: "" }),
  });

  return (
    <div className="common-layout">
      <SectionTitle
        title="공지사항"
        items={[{ id: 0, title: "공지사항", path: "/notices" }]}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientNoticesTable />
      </HydrationBoundary>
    </div>
  );
}
