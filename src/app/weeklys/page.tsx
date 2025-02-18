import SectionTitle from "@/components/SectionTitle";

import ClientWeeklysTable from "@/components/_clientComponents/ClientWeeklysTable";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["weeklys"],
    queryFn: () => GetList.getWeeklys({ page: "1", limit: "10", search: "" }),
  });

  return (
    <div className="common-layout">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SectionTitle
          title="주보"
          items={[{ id: 0, title: "주보", path: "/weeklys" }]}
        />
        <ClientWeeklysTable />
      </HydrationBoundary>
    </div>
  );
}
