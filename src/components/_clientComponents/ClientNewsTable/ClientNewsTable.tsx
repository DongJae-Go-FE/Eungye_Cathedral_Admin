"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";
import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";
import { RequestGetListType } from "@/type";
import { formatDate } from "@/utils/common";

export default function ClientNewsTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery<RequestGetListType>({
    queryKey: ["news", page, search],
    queryFn: async () =>
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news?page=${page}&limit=10&q=${search}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8",
          },
          cache: "force-cache",
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

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <FormSearch handleSearch={handleSubmit} isLoading={isLoading} />
      <div className="mb-2 mt-4 flex justify-end">
        <Button size="sm" color="white" href="/news/add">
          등록
        </Button>
      </div>
      <Table
        caption="본당소식 테이블"
        columns={columns}
        initialData={
          data?.data.list.map((list, index) => ({
            no: index + 1,
            title: list.title,
            created_at: formatDate(list.created_at),
            id: list.id,
          })) || []
        }
        page={Number(data?.page)}
        pageSize={Number(data?.limit)}
        totalCount={data?.data.total || 0}
        href="/news"
        isLoading={isLoading}
        onPageChange={(page) => {
          setPage((prev) => {
            prev = page;
            return prev;
          });
        }}
      />
    </div>
  );
}
