"use client";

import { useState, useMemo } from "react";

import FormSearch from "@/components/FormSearch";
import Button from "@/components/Button";
import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";

import { formatDate } from "@/utils/common";

import { useNews } from "@/queryApi/useListQuery";

import useDebounce from "@/hooks/useDebounce";

export default function ClientNewsTable() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce({ value: search, delay: 300 });

  const { data, isFetching } = useNews({
    page: page.toString(),
    limit: "10",
    search: debouncedSearchValue,
  });
  const columns: TableColumn[] = useMemo(
    () => [
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
    ],
    [],
  );

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <FormSearch handleSearch={handleSubmit} isLoading={isFetching} />
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
        isLoading={isFetching}
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
