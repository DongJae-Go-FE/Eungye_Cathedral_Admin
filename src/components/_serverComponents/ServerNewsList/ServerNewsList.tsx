import List from "@/components/List";

export default async function ServerNewsList() {
  return (
    <section>
      <h3 className="mb-9 text-heading03b text-black">분당소식</h3>
      <List
        href="/news"
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
