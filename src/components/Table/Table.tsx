import Link from "next/link";

import { ReactNode, HtmlHTMLAttributes, memo } from "react";
import Empty from "@/components/Empty";
import Spinner from "../Spinner";
import Pagination from "../Pagination";

export type TableColumnAlign = "left" | "right" | "center";

export interface TableColumn {
  key: string;
  title: ReactNode;
  width?: number | string;
  headerAlign?: TableColumnAlign;
  bodyAlign?: TableColumnAlign;
  render?: ReactNode;
}

interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  columns: Array<TableColumn>;
  // eslint-disable-next-line
  initialData: any[];
  caption: string;
  href?: string;
  isLoading?: boolean;
  totalCount: number;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
}

const RenderPrevUI = ({
  columns,
  children,
}: {
  columns: Array<TableColumn>;
  children: ReactNode;
}) => {
  return (
    <div className="relative h-[611px] w-full">
      <div className="table-header mb-2">
        <span className="text-body02m">총 0건</span>
      </div>
      <ul className="flex h-12 w-full items-center border-y-2 border-gray-200">
        {columns.map(({ title, width }, index) => {
          return (
            <li
              key={index}
              style={{ width: width ? width : "auto" }}
              className="text-body02m px-5 text-center"
            >
              {title}
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

const Table = memo(
  ({
    caption,
    columns,
    initialData,
    page,
    pageSize,
    totalCount,
    href,
    isLoading,
    onPageChange,
  }: TableProps) => {
    const totalPage = pageSize ? Math.ceil(totalCount / pageSize) : 1;

    if (isLoading) {
      return (
        <RenderPrevUI columns={columns}>
          <Spinner />
        </RenderPrevUI>
      );
    }
    if (initialData.length === 0 || !initialData) {
      return (
        <RenderPrevUI columns={columns}>
          <Empty description="데이터가 없습니다." />
        </RenderPrevUI>
      );
    }

    if (!columns || !columns.length) {
      throw new Error("테이블 헤더값이 없습니다.");
    }

    const columnsKey = columns.map((column) => column.key);

    return (
      <div>
        <div className="h-[611px] w-full">
          {totalCount && (
            <div className="table-header mb-2">
              <span className="text-body02m">총 {totalCount}건</span>
            </div>
          )}
          <div className="table-body relative w-full">
            <table className="w-full">
              <caption className="sr-only">{caption}</caption>
              <colgroup>
                {columns.map(({ width }, index) => (
                  <col key={index} width={width ? width : "auto"} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  {columns.map(({ title, headerAlign }, index) => (
                    <th
                      key={index}
                      style={{ textAlign: headerAlign }}
                      className="text-body02m h-12 border-y-2 border-gray-200 px-5"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {initialData.map((item, index) => (
                  <tr key={index}>
                    {columnsKey.map((key) => (
                      <td
                        key={key + index}
                        className="text-body02r h-12 border-b-2 border-gray-100 px-5 text-center"
                      >
                        {key === "title" ? (
                          <Link
                            href={`${href}/${item.id}`}
                            className="hover:underline"
                          >
                            {item[key]}
                          </Link>
                        ) : (
                          item[key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPage > 1 && (
            <div className="mt-4 flex w-full justify-center">
              <Pagination
                current={page || 1}
                total={totalPage}
                numericOptions={{
                  max: 10,
                }}
                onChange={onPageChange}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default Table;

Table.displayName = "Table";
