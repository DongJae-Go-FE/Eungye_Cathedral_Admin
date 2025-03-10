import Link from "next/link";

import List from "@/components/List";

import GetApi from "@/utils/getApi";

export default async function ServerNoticeList() {
  const noticesList = await GetApi.getNotices({
    page: "1",
    limit: "5",
    search: "",
    config: {
      next: { tags: ["serverNoticesList"] },
    },
  });

  return (
    <section>
      <h3 className="heading03b mb-3 flex items-center justify-between text-black">
        공지사항
        <Link href="/notices" className="body01m hover:underline">
          더보기
        </Link>
      </h3>
      <List
        href="/notices"
        items={
          noticesList?.data?.list?.map(({ id, title, created_at }) => {
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
