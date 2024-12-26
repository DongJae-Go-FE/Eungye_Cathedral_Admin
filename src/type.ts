export type RequestGetListType = {
  page: string;
  limit: string;
  data: {
    id: number;
    title: string;
    content?: string;
    created_at: string;
    imgUrl?: string;
  }[];
};

export type RequestGetDetailType = {
  id: number;
  title: string;
  content?: string;
  created_at: string;
  imgUrl?: string;
};
