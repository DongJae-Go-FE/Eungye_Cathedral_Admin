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
    },
  ).then((res) => res.json());

  return (
    <section>
      <h3 className="mb-7 text-heading03b text-black">주보</h3>
      <List
        href="/weeklys"
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
