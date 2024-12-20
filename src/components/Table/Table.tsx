import { ReactNode, HtmlHTMLAttributes } from "react";

export type TableColumnAlign = "left" | "right" | "center";

export interface TableColumn {
  key: string;
  title: ReactNode;
  width?: number;
  headerAlign?: TableColumnAlign;
  bodyAlign?: TableColumnAlign;
  render?: ReactNode;
}

interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  columns: Array<TableColumn>;
  // eslint-disable-next-line
  initialData: any[];
  caption: string;
  isLoading?: boolean;
  totalCount?: number;
  page?: number;
  pageSize?: number;
}

export default function Table({
  caption,
  columns,
  initialData,
  //page,
  //pageSize,
  totalCount,
  isLoading,
}: TableProps) {
  if (isLoading) {
    return "로딩중...";
  }
  if (initialData.length === 0 || !initialData) {
    return "데이터가 없습니다.";
  }

  if (!columns || !columns.length) {
    throw new Error("테이블 헤더값이 없습니다.");
  }

  const columnsKey = columns.map((columns) => columns.key);

  return (
    <div className="table">
      {totalCount && (
        <div className="table-header">
          <span>{totalCount}</span>
        </div>
      )}
      <div className="table-body relative w-full">
        <table>
          <caption className="sr-only">{caption}</caption>
          <colgroup>
            {columns.map(({ width }, index) => {
              return <col key={index} width={width ? width : "auto"} />;
            })}
          </colgroup>
          <thead>
            <tr>
              {columns.map(({ title, headerAlign }, index) => {
                return (
                  <th key={index} style={{ textAlign: headerAlign }}>
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {initialData.map((item, index) => (
              <tr key={index}>
                {columnsKey.map((key) => (
                  <td key={key + index}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
