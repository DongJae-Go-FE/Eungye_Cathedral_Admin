import { useQuery } from "@tanstack/react-query";
import queryOptions from "./queryOptions";

import { ListParamsType } from "../utils/getApi";

export function useNews({ page = "1", limit = "10", search }: ListParamsType) {
  return useQuery(queryOptions.news({ page, limit, search }));
}

export function useNotices({
  page = "1",
  limit = "10",
  search,
}: ListParamsType) {
  return useQuery(queryOptions.notices({ page, limit, search }));
}

export function useWeeklys({
  page = "1",
  limit = "10",
  search,
}: ListParamsType) {
  return useQuery(queryOptions.weeklys({ page, limit, search }));
}
