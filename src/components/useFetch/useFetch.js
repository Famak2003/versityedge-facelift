import { useState, useEffect } from "react";
const useFetch = (baseURL) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    fetch(baseURL, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch Data for this resource");
        }
        return res.json();
      })
      .then((data) => {
        if (!signal.aborted) {
          setData(data);
          setIsPending(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (!signal.aborted) {
          if (err.name === "AbortError") {
            console.log("Error Aborted", err);
          } else {
            setError(err.message);
            setIsPending(false);
          }
        }
      });

    return () => abortCont.abort();
  }, [baseURL]);
  return { data, isPending, error };
};
export default useFetch;
