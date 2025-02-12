import getRequest from "@/utils/getRequest";
import { RequestGetListType, RequestGetDetailType, AdjacentType } from "@/type";

export type ListParamsType = {
  page?: string;
  limit?: string;
  search?: string;
  config?: RequestInit;
};

export type DetailParamsType = {
  id: string;
  config?: RequestInit;
};

export type AdjacentParamsType = {
  id: string;
  href: string;
  config?: RequestInit;
};

class getApi extends getRequest {
  getNews({ page, limit, search, config }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/news?page=${page}&limit=${limit}&q=${search}`,
      config,
    );
  }

  getNewsDetail({ id, config }: DetailParamsType) {
    return this.http.get<RequestGetDetailType>(`/news/${id}`, config);
  }

  getNotices({ page, limit, search, config }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/notices?page=${page}&limit=${limit}&q=${search}`,
      config,
    );
  }

  getNoticesDetail({ id, config }: DetailParamsType) {
    return this.http.get<RequestGetDetailType>(`/notices/${id}`, config);
  }

  getWeeklys({ page, limit, search, config }: ListParamsType) {
    return this.http.get<RequestGetListType>(
      `/weeklys?page=${page}&limit=${limit}&q=${search}`,
      config,
    );
  }

  getWeeklysDetail({ id, config }: DetailParamsType) {
    return this.http.get<RequestGetDetailType>(`/weeklys/${id}`, config);
  }

  getAdjacent({ id, href, config }: AdjacentParamsType) {
    return this.http.get<AdjacentType>(`/${href}/${id}/adjacent`, config);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new getApi();
