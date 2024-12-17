import Link from "next/link";
import { Url } from "url";

import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";

type ItemType = {
  id: number | string;
  title: string;
  date?: string;
};

type ListType = {
  items?: ItemType[];
  href?: Url | string;
  isLoading?: boolean;
};

export default function List({ items, href, isLoading }: ListType) {
  const ulStyle = "relative h-[168px]";
  const liStyle = "flex justify-between items-center relative pl-6";

  const liBeforeStyle =
    "before:content[``] before:absolute before:top-1/2 before:h-[3px] before:w-[3px] before:-translate-y-1/2 before:rounded-[3px] before:bg-black before:left-2.5";

  const titleStyle = "truncate text-body01m text-black w-[80%]";
  const spanStyle = "text-body02m text-gray-500";

  if (isLoading) {
    return (
      <div className={ulStyle}>
        <Spinner />;
      </div>
    );
  }

  if (items?.length === 0 || !items) {
    return (
      <div className={ulStyle}>
        <Empty description="데이터가 없습니다." />
      </div>
    );
  }

  return (
    <ul className={`flex flex-col gap-y-3 ${ulStyle}`}>
      {items.map(({ id, title, date }) => {
        if (href) {
          return (
            <li key={id} className={`${liStyle} ${liBeforeStyle}`}>
              <Link
                className={titleStyle}
                href={`${href}/${id}` || ""}
                title={title ? title : "타이틀이 없습니다."}
              >
                {title ? title : "타이틀이 없습니다."}
              </Link>
              <span className={spanStyle}>
                {date ? date?.toLocaleString() : "-"}
              </span>
            </li>
          );
        } else {
          return (
            <li key={id} className={`${liStyle} ${liBeforeStyle}`}>
              <p
                className={titleStyle}
                title={title ? title : "타이틀이 없습니다."}
              >
                {title ? title : "타이틀이 없습니다."}
              </p>
              {date ? date?.toLocaleString() : "-"}
            </li>
          );
        }
      })}
    </ul>
  );
}
