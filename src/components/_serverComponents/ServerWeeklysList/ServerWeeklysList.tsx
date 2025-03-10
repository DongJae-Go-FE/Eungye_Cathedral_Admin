import Link from "next/link";

import List from "@/components/List";

import GetApi from "@/utils/getApi";

export default async function ServerWeeklysList() {
  const weeklysList = await GetApi.getWeeklys({
    page: "1",
    limit: "5",
    search: "",
    config: {
      next: { tags: ["serverWeeklysList"] },
    },
  });

  return (
    <section>
      <h3 className="heading03b mb-3 flex items-center justify-between text-black">
        주보
        <Link href="/weeklys" className="body01m hover:underline">
          더보기
        </Link>
      </h3>
      <List
        href="/weeklys"
        items={
          weeklysList?.data?.list?.map(({ id, title, created_at }) => {
            return {
              id,
              title,
              date: created_at,
            };
          }) || []
        }
      />
    </section>
  );
}
