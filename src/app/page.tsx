import ServerNoticeList from "@/components/_serverComponents/ServerNoticeList/ServerNoticeList";
import NewsList from "@/components/_serverComponents/newsList";
export default async function Home() {
  return (
    <main>
      <div className="common-layout">
        <ul className="grid grid-cols-2 grid-rows-2 gap-6">
          <li>
            <ServerNoticeList />
          </li>
          <li>
            <NewsList />
          </li>
        </ul>
      </div>
    </main>
  );
}
