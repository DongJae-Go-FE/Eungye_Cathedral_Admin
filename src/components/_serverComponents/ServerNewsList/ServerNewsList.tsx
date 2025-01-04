import Link from "next/link";

import List from "@/components/List";

import { RequestGetListType } from "@/type";

export default async function ServerNewsList() {
  const response: RequestGetListType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news?page=1&limit=5`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
      next: { tags: ["serverNewsList"] },
    },
  ).then((res) => res.json());

  return (
    <section>
      <h3 className="mb-7 flex items-center justify-between text-heading03b text-black">
        본당소식
        <Link href="/news" className="text-body01m hover:underline">
          더보기
        </Link>
      </h3>
      <List
        href="/news"
        items={
          response.data?.list?.map(({ id, title, created_at }) => {
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
