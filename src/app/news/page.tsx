import SectionTitle from "@/components/SectionTitle";

import ClientNewsTable from "@/components/_clientComponents/ClientNewsTable";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["news"],
    queryFn: () => GetList.getNews({ page: "1", limit: "10", search: "" }),
  });

  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientNewsTable />
      </HydrationBoundary>
    </div>
  );
}
