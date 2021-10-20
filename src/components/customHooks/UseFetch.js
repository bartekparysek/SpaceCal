import { useEffect, useState } from "react";
import spaceX from "../../apis/spaceX";

const useFetch = (url) => {
  const [data, setData] = useState({
    data: null,
    isFetching: false,
    error: null,
  });
  const [endpoint] = useState(url);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isFetching: true }));
        const response = await spaceX.get(endpoint);
        setData((prev) => ({
          ...prev,
          data: response.data,
          isFetching: false,
        }));
      } catch (error) {
        setData((prev) => ({ ...prev, isFetching: false, error: error }));
      }
    };
    fetchData();
  }, [endpoint]);
  return data;
};
export default useFetch;
