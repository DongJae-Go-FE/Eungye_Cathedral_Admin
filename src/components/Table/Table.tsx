import { ReactNode, HtmlHTMLAttributes} from "react";
import Empty from "@/components/Empty";
import Spinner from "../Spinner";

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
    return (
      <div className="relative w-full h-[528px]">
        <ul className="flex border-y-2 border-gray-200 w-full h-12 items-center">
          {columns.map(({title, width},index) => {
            return(
              <li key = {index} style={{width: width ? width :"auto"}} className="text-center text-body02m px-5">{title}</li>
            )
          })}
        </ul>
        <Spinner/>
      </div>
    );
  }
  if (initialData.length === 0 || !initialData) {
    return (
      <div className="relative w-full h-[528px]">
        <ul className="flex border-y-2 border-gray-200 w-full h-12 items-center">
          {columns.map(({title, width},index) => {
            return(
              <li key = {index} style={{width: width ? width :"auto"}} className="text-center text-body02m px-5">{title}</li>
            )
          })}
        </ul>
        <Empty description="데이터가 없습니다." />
      </div>
    );
  }

  if (!columns || !columns.length) {
    throw new Error("테이블 헤더값이 없습니다.");
  }

  const columnsKey = columns.map((columns) => columns.key);

  return (
    <div className="w-full h-[528px]">
      {totalCount && (
        <div className="table-header">
          <span>{totalCount}</span>
        </div>
      )}
      <div className="table-body relative w-full">
        <table className="w-full">
          <caption className="sr-only">{caption}</caption>
          <colgroup>
            {columns.map(({ width }, index) => {
              return <col key={index} width={width ? width : "auto"} />;
            })}
          </colgroup>
          <thead>
            <tr className="border-y-2 border-gray-200 w-full h-12">
              {columns.map(({ title, headerAlign }, index) => {
                return (
                  <th key={index} style={{ textAlign: headerAlign }} className="text-body02m px-5">
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {initialData.map((item, index) => (
              <tr key={index} className="border-b-2 border-gray-100 h-12">
                {columnsKey.map((key) => (
                  <td key={key + index} className="text-center text-body02r px-5">{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
