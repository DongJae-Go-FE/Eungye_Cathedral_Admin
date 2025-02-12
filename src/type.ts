export type RequestGetListType = {
  page: string;
  limit: string;
  data: {
    total: number;
    totalPages: number;
    list: {
      id: number;
      title: string;
      content?: string;
      created_at: string;
      imgUrl?: string;
    }[];
  };
};

export type RequestGetDetailType = {
  id: number;
  title: string;
  content?: string;
  created_at: string;
  imgUrl?: string;
};

export type AdjacentType = {
  previous: {
    id?: number | string;
    title: string;
    created_at?: string;
    state?: boolean;
  };
  next: {
    id?: number | string;
    title: string;
    created_at?: string;
    state?: boolean;
  };
};
