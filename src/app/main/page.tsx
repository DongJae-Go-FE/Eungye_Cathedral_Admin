import ServerNoticeList from "@/components/_serverComponents/ServerNoticeList/ServerNoticeList";

export default async function Home() {
  return (
    <div className="common-layout">
      <ul className="grid grid-cols-2 grid-rows-2 gap-6">
        <li>
          <ServerNoticeList />
        </li>
        <li>
          <ServerNoticeList />
        </li>
      </ul>
    </div>
  );
}
