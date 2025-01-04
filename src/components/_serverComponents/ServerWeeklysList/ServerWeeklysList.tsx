import Link from "next/link";

import List from "@/components/List";

import { RequestGetListType } from "@/type";

export default async function ServerWeeklysList() {
  const response: RequestGetListType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/weeklys?page=1&limit=5`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
      next: { tags: ["serverWeeklysList"] },
    },
  ).then((res) => res.json());

  return (
    <section>
      <h3 className="mb-7 flex items-center justify-between text-heading03b text-black">
        주보
        <Link href="/weeklys" className="text-body01m hover:underline">
          더보기
        </Link>
      </h3>
      <List
        href="/weeklys"
        items={
          response?.data?.list?.map(({ id, title, created_at }) => {
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
