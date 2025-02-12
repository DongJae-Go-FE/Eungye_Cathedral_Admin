import { notFound } from "next/navigation";

interface HTTPInstance {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  delete<T>(url: string, config?: RequestInit): Promise<T>;
  head<T>(url: string, config?: RequestInit): Promise<T>;
  options<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  put<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
  patch<T>(url: string, data?: unknown, config?: RequestInit): Promise<T>;
}

class queryRequest {
  public http: HTTPInstance;

  private baseURL: string;

  private headers: Record<string, string>;

  constructor() {
    this.baseURL = `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}`;
    this.headers = {
      Referer: this.baseURL,
    };

    this.http = {
      get: this.get.bind(this),
      delete: this.delete.bind(this),
      head: this.head.bind(this),
      options: this.options.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this),
    };
  }

  private async request<T = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    const response = await fetch(this.baseURL + url, {
      method,
      headers: {
        ...this.headers,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        ...config?.headers,
      },

      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    if (response.status === 404) {
      notFound();
    }

    if (!response.ok) {
      throw new Error("네트워크 에러입니다.");
    }

    const responseData: T = await response.json();
    return responseData;
  }

  private get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("GET", url, undefined, config);
  }

  private delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("DELETE", url, undefined, config);
  }

  private head<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("HEAD", url, undefined, config);
  }

  private options<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>("OPTIONS", url, undefined, config);
  }

  private post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("POST", url, data, config);
  }

  private put<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("PUT", url, data, config);
  }

  private patch<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>("PATCH", url, data, config);
  }
}

export default queryRequest;
