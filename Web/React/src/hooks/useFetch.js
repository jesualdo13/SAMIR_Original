import { useEffect, useState } from "react";
import { customFetch } from "../helpers/customFetch";

const useFetch = (url, options, refresh = null) => {
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  useEffect(() => {
    customFetch({ fetchState, setFetchState }, url, options);

    //eslint-disable-next-line
  }, [url, refresh]);

  return fetchState;
};

export default useFetch;
