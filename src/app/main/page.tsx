import ServerNoticeList from "@/components/_serverComponents/ServerNoticeList/ServerNoticeList";
import NewsList from "@/components/_serverComponents/newsList";
import WeeklysList from "@/components/_serverComponents/weeklysList";

export default async function Home() {
  return (
    <div className="common-layout">
      <ul className="grid grid-cols-2 grid-rows-2 gap-6">
        <li>
          <ServerNoticeList />
        </li>
        <li>
          <NewsList />
        </li>
        <li>
          <WeeklysList />
        </li>
      </ul>
    </div>
  );
}
