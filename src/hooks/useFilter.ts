import { useCallback, useEffect, useState } from "react";
import queryString, { ParsedUrlQueryInput } from "querystring";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const useFilter = <T extends ParsedUrlQueryInput>(
  initialState: T,
  options?: {
    disableQueryParams?: boolean;
  },
) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState<T>(
    queryString.parse(
      searchParams.toString() || queryString.stringify(initialState),
    ) as T,
  );

  const [query, setQuery] = useState<T>();

  const [isReady, setIsReady] = useState(false);

  const setQueryParams = useCallback(
    (filter: T) => {
      if (!options?.disableQueryParams) {
        const filterString = queryString.stringify(filter);
        router.replace(`${pathname}?${filterString}`);
      }
    },
    [options?.disableQueryParams, pathname, router],
  );

  useEffect(() => {
    if (!query && !isReady) {
      setQueryParams(filter);

      setIsReady(true);
    }
  }, [
    options?.disableQueryParams,
    filter,
    isReady,
    pathname,
    query,
    router,
    setQueryParams,
  ]);

  const handleSubmit = (filter: T) => {
    setFilter({ ...filter });
    setQuery({ ...filter });

    setQueryParams(filter);
  };

  const handleReset = () => {
    handleSubmit(initialState);
  };

  return {
    filter,
    setFilter,
    /**
     * Submit, Reset을 통해 filter 값이 확정되면 변경됨. (React Query Dependency에 걸기 위한 용도)
     */
    query,

    handleReset,
    handleSubmit,
  };
};
