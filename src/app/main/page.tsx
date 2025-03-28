import Image from "next/image";

import ServerNoticeList from "@/components/_serverComponents/ServerNoticeList/ServerNoticeList";
import ServerNewsList from "@/components/_serverComponents/ServerNewsList";
import ServerWeeklysList from "@/components/_serverComponents/ServerWeeklysList";

export default async function Home() {
  return (
    <div className="common-layout">
      <div className="mb-8 flex h-[300px] w-full">
        <Image
          src="/main2.jpg"
          width={550}
          height={120}
          alt="은계성당 관리자 메인 페이지 신앙여행 사진"
          priority
        />
        <Image
          src="/main.jpg"
          width={550}
          height={120}
          alt="은계성당 관리자 메인 페이지 세례 사진"
          priority
        />
        <Image
          src="/main3.jpg"
          width={550}
          height={120}
          alt="은계성당 관리자 메인 페이지 기사 사진"
          priority
        />
      </div>
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
