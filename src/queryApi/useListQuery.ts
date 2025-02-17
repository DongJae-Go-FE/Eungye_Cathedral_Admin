import { useQuery, useQueryClient } from "@tanstack/react-query";
import queryOptions from "./queryOptions";
import { ListParamsType } from "../utils/getApi";
import { useEffect } from "react";

export function useNews({ page = "1", limit = "10", search }: ListParamsType) {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(queryOptions.news({ page, limit, search }));
  }, [page, limit, search, queryClient]);

  return useQuery(queryOptions.news({ page, limit, search }));
}

export function useNotices({
  page = "1",
  limit = "10",
  search,
}: ListParamsType) {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(queryOptions.notices({ page, limit, search }));
  }, [page, limit, search, queryClient]);

  return useQuery(queryOptions.notices({ page, limit, search }));
}

export function useWeeklys({
  page = "1",
  limit = "10",
  search,
}: ListParamsType) {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(queryOptions.weeklys({ page, limit, search }));
  }, [page, limit, search, queryClient]);

  return useQuery(queryOptions.weeklys({ page, limit, search }));
}
