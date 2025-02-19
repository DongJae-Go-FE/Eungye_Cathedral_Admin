"use client";

import { useMemo } from "react";

import FormSearch from "@/components/FormSearch";
import Button from "@/components/Button";
import Table from "@/components/Table";

import { TableColumn } from "@/components/Table/Table";

import { formatDate } from "@/utils/common";

import { useNotices } from "@/hooks/useListQuery";
import { useFilter } from "@/hooks/useFilter";
import useDebounce from "@/hooks/useDebounce";

import { RequestFilterListType } from "@/type";

export default function ClientNoticesTable() {
  const { filter, handleSubmit } = useFilter<RequestFilterListType>({
    page: "1",
    limit: "10",
    search: "",
  });

  const debouncedSearchValue = useDebounce({
    value: filter.search,
    delay: 300,
  });

  const { data, isFetching } = useNotices({
    page: filter.page,
    limit: filter.limit,
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

  const handleSearchSubmit = (e: string) => {
    handleSubmit({ ...filter, search: e });
  };

  return (
    <div>
      <FormSearch handleSearch={handleSearchSubmit} isLoading={isFetching} />
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
        isLoading={isFetching}
        onPageChange={(newPage) =>
          handleSubmit({ ...filter, page: newPage.toString() })
        }
      />
    </div>
  );
}
