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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.36508 1.29433C7.15203 1.1239 6.84931 1.1239 6.63627 1.29433L0.802934 5.961C0.551364 6.16225 0.510577 6.52934 0.711832 6.78091C0.913088 7.03248 1.28018 7.07327 1.53174 6.87201L2.04234 6.46354V12.2498C2.04234 12.572 2.30351 12.8332 2.62567 12.8332H11.3757C11.6978 12.8332 11.959 12.572 11.959 12.2498V6.46354L12.4696 6.87201C12.7212 7.07327 13.0883 7.03248 13.2895 6.78091C13.4908 6.52934 13.45 6.16225 13.1984 5.961L7.36508 1.29433ZM4.95898 8.45817C4.95898 8.136 5.22015 7.87484 5.54232 7.87484H8.45898C8.78115 7.87484 9.04232 8.136 9.04232 8.45817V11.6665H7.87565V9.0415H6.12565V11.6665H4.95898V8.45817Z"
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
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42085 3.08736C5.64866 2.85955 6.01801 2.85955 6.24581 3.08736L9.74581 6.58736C9.97362 6.81516 9.97362 7.18451 9.74581 7.41232L6.24581 10.9123C6.01801 11.1401 5.64866 11.1401 5.42085 10.9123C5.19305 10.6845 5.19305 10.3152 5.42085 10.0874L8.50838 6.99984L5.42085 3.91232C5.19305 3.68451 5.19305 3.31516 5.42085 3.08736Z"
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
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.42085 3.08736C5.64866 2.85955 6.01801 2.85955 6.24581 3.08736L9.74581 6.58736C9.97362 6.81516 9.97362 7.18451 9.74581 7.41232L6.24581 10.9123C6.01801 11.1401 5.64866 11.1401 5.42085 10.9123C5.19305 10.6845 5.19305 10.3152 5.42085 10.0874L8.50838 6.99984L5.42085 3.91232C5.19305 3.68451 5.19305 3.31516 5.42085 3.08736Z"
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
