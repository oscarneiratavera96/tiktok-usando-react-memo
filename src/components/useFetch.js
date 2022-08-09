import { useState, useEffect } from "react";

const useFetch = (url, type) => {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!url) {
      fetchData();
    }
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        setResponse(response);
        // console.log(response);

        switch (type) {
          case "text":
            const text = await response.text();
            setData(text);
            setIsLoading(false);
            break;

          case "json":
            const json = await response.json();
            setData(json);
            setIsLoading(false);
            // console.log(json);
            break;
          default:
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  }, [url]);

  return [response, data, isLoading];
};

export default useFetch;
