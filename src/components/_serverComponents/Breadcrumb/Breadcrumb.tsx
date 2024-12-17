import Link from "next/link";

type ItemType = {
  id: number;
  title: string;
  path: string;
};

export type BreadcrumbType = {
  items?: ItemType[];
};

//TODO. SVG 처리 고민 - DongJae

export default async function Breadcrumb({ items }: BreadcrumbType) {
  const commonStyle = "flex items-center gap-x-1";
  const liStyle = `${commonStyle} text-body02m text-gray-500`;

  return (
    <ul className={commonStyle}>
      <li className="flex gap-x-1">
        <Link href="/" title="메인으로 가기">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.36435 1.29445C7.1513 1.12402 6.84858 1.12402 6.63554 1.29445L0.802201 5.96112C0.550632 6.16237 0.509844 6.52946 0.7111 6.78103C0.912356 7.0326 1.27944 7.07339 1.53101 6.87213L2.04161 6.46366V12.25C2.04161 12.5721 2.30277 12.8333 2.62494 12.8333H11.3749C11.6971 12.8333 11.9583 12.5721 11.9583 12.25V6.46366L12.4689 6.87213C12.7204 7.07339 13.0875 7.0326 13.2888 6.78103C13.49 6.52946 13.4492 6.16237 13.1977 5.96112L7.36435 1.29445ZM4.95825 8.45829C4.95825 8.13613 5.21942 7.87496 5.54159 7.87496H8.45825C8.78042 7.87496 9.04159 8.13613 9.04159 8.45829V11.6666H7.87492V9.04163H6.12492V11.6666H4.95825V8.45829Z"
              fill="#999999"
            />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42085 3.08748C5.64866 2.85967 6.01801 2.85967 6.24581 3.08748L9.74581 6.58748C9.97362 6.81529 9.97362 7.18463 9.74581 7.41244L6.24581 10.9124C6.01801 11.1402 5.64866 11.1402 5.42085 10.9124C5.19305 10.6846 5.19305 10.3153 5.42085 10.0875L8.50838 6.99996L5.42085 3.91244C5.19305 3.68463 5.19305 3.31529 5.42085 3.08748Z"
            fill="#DDDDDD"
          />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.42085 3.08748C5.64866 2.85967 6.01801 2.85967 6.24581 3.08748L9.74581 6.58748C9.97362 6.81529 9.97362 7.18463 9.74581 7.41244L6.24581 10.9124C6.01801 11.1402 5.64866 11.1402 5.42085 10.9124C5.19305 10.6846 5.19305 10.3153 5.42085 10.0875L8.50838 6.99996L5.42085 3.91244C5.19305 3.68463 5.19305 3.31529 5.42085 3.08748Z"
                  fill="#DDDDDD"
                />
              </svg>
            </li>
          );
        }
      })}
    </ul>
  );
}
