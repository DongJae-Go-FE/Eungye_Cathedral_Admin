"use client";

import { useState } from "react";

import FormSearch from "@/components/FormSearch";
import Button from "@/components/Button";
import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";

import { formatDate } from "@/utils/common";

import { useNotices } from "@/queryApi/useListQuery";

import useDebounce from "@/hooks/useDebounce";

export default function ClientNoticesTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce({ value: search, delay: 300 });

  const { data, isLoading } = useNotices({
    page: page.toString(),
    limit: "10",
    search: debouncedSearchValue,
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
        <Button size="sm" color="white" href="/notices/add">
          등록
        </Button>
      </div>
      <Table
        caption="공지사항 테이블"
        columns={columns}
        initialData={
          data?.data?.list.map((list, index) => ({
            no: index + 1,
            title: list.title,
            created_at: formatDate(list.created_at),
            id: list.id,
          })) || []
        }
        page={Number(data?.page)}
        pageSize={Number(data?.limit)}
        totalCount={data?.data?.total || 0}
        href="/notices"
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
