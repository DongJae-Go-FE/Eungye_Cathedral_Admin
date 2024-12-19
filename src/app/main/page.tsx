import ServerNoticeList from "@/components/_serverComponents/ServerNoticeList/ServerNoticeList";
import ServerNewsList from "@/components/_serverComponents/ServerNewsList";
import ServerWeeklysList from "@/components/_serverComponents/ServerWeeklysList";

export default async function Home() {
  return (
    <div className="common-layout">
      <ul className="grid grid-cols-2 grid-rows-2 gap-6">
        <li>
          <ServerNoticeList />
        </li>
        <li>
          <ServerNewsList />
        </li>
        <li>
          <ServerWeeklysList />
        </li>
      </ul>
    </div>
  );
}
