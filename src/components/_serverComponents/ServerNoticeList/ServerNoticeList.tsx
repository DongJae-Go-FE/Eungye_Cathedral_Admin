import List from "@/components/List";

export default async function ServerNoticeList() {
  return (
    <section>
      <h3 className="mb-7 text-heading03b text-black">공지사항</h3>
      <List
        href="/notices"
        items={[
          {
            id: 0,
            title: "타이틀1",
            date: "2024.12.07",
          },
          {
            id: 1,
            title: "타이틀2",
            date: "2024.12.07",
          },
        ]}
      />
    </section>
  );
}
