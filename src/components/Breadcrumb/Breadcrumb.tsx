import Link from "next/link";

type ItemType = {
  id: number;
  title: string;
  path: string;
};

export type BreadcrumbType = {
  items?: ItemType[];
};

export default async function Breadcrumb({ items }: BreadcrumbType) {
  const commonStyle = "flex items-center gap-x-1";
  const liStyle = `${commonStyle} text-body02m text-gray-500`;

  return (
    <ul className={commonStyle}>
      <li className="flex gap-x-1">
        <Link href="/" title="메인으로 가기">
          <svg width={14} height={14} color="#999" aria-hidden>
            <use href="icons/filled/base.svg#Filled/Base/home" />
          </svg>
        </Link>
        <svg width={14} height={14} color="#ddd" aria-hidden>
          <use href="icons/outlined/arrows.svg#Outlined/Arrows/right" />
        </svg>
      </li>
      {items?.map(({ id, title, path }, index) => {
        if (index === items.length - 1) {
          return (
            <li key={id} className={liStyle}>
              <Link href={path}>{title}</Link>
            </li>
          );
        } else {
          return (
            <li key={id} className={liStyle}>
              <Link href={path}>{title}</Link>
              <svg width={14} height={14} color="#ddd" aria-hidden>
                <use href="icons/outlined/arrows.svg#Outlined/Arrows/right" />
              </svg>
            </li>
          );
        }
      })}
    </ul>
  );
}
