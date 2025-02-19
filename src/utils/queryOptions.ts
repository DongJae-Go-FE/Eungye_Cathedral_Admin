import GetList from "./getApi";
import { ListParamsType } from "./getApi";

const queryKeys = {
  news: ({ page, limit, search }: ListParamsType) =>
    ["news", page, limit, search] as const,

  notices: ({ page, limit, search }: ListParamsType) =>
    ["notices", page, limit, search] as const,

  weeklys: ({ page, limit, search }: ListParamsType) =>
    ["weeklys", page, limit, search] as const,
};

const queryOptions = {
  news: ({ page, limit, search }: ListParamsType) => ({
    queryKey: queryKeys.news({ page, limit, search }),
    queryFn: () => GetList.getNews({ page, limit, search }),
  }),

  notices: ({ page, limit, search }: ListParamsType) => ({
    queryKey: queryKeys.notices({ page, limit, search }),
    queryFn: () => GetList.getNotices({ page, limit, search }),
  }),

  weeklys: ({ page, limit, search }: ListParamsType) => ({
    queryKey: queryKeys.weeklys({ page, limit, search }),
    queryFn: () => GetList.getWeeklys({ page, limit, search }),
  }),
};

export default queryOptions;
