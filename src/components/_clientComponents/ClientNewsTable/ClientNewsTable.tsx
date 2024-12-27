"use client";

import { useQuery } from "@tanstack/react-query";

import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";
import { RequestGetListType } from "@/type";
import { formatDate } from "@/utils/common";

export default function ClientNewsTable() {
  //TODO. API 수정해야함
  const { data, isLoading } = useQuery<RequestGetListType>({
    queryKey: ["news"],
    queryFn: async () =>
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news?page=1&limit=10`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
      ).then((res) => res.json()),
  });

  const columns: TableColumn[] = [
    {
      key: "no",
      title: "No",
      width: "10%",
    },
    {
      key: "title",
      title: "제목",
      width: "60%",
    },
    {
      key: "created_at",
      title: "생성일",
      width: "30%",
    },
  ];

  return (
    <div>
      <Table
        caption="본당소식 테이블"
        columns={columns}
        initialData={
          data?.data?.map((list, index) => ({
            no: index + 1,
            title: list.title,
            created_at: formatDate(list.created_at),
          })) || []
        }
        page={1}
        pageSize={5}
        totalCount={20}
        isLoading={isLoading}
      />
    </div>
  );
}
