"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import FormSearch from "@/components/FormSearch";
import Button from "@/components/Button";
import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";
import { RequestGetListType } from "@/type";
import { formatDate } from "@/utils/common";

import useDebounce from "@/hooks/useDebounce";

export default function ClientNewsTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce({ value: search, delay: 300 });

  const { data, isLoading } = useQuery<RequestGetListType>({
    queryKey: ["/news", page, debouncedSearchValue],
    queryFn: async () =>
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news?page=${page}&limit=10&q=${debouncedSearchValue}`,
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

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <FormSearch handleSearch={handleSubmit} isLoading={isLoading} />
      <div className="mt-4 mb-2 flex justify-end">
        <Button size="sm" color="white" href="/news/add">
          등록
        </Button>
      </div>
      <Table
        caption="본당소식 테이블"
        columns={columns}
        initialData={
          data?.data?.list?.map((list, index) => ({
            no: index + 1,
            title: list.title,
            created_at: formatDate(list.created_at),
            id: list.id,
          })) || []
        }
        page={Number(data?.page)}
        pageSize={Number(data?.limit)}
        totalCount={data?.data?.total || 0}
        href="/news"
        isLoading={isLoading}
        // onPageChange={(page) => {
        //   setPage((prev) => {
        //     prev = page;
        //     return prev;
        //   });
        // }}
        onPageChange={(newPage) => {
          if (newPage !== page) {
            setPage(newPage);
          }
        }}
      />
    </div>
  );
}
