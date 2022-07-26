import { useState, useCallback } from "react";

const useHttp = (responseFn) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState("");
  const [hasError, setHasError] = useState("");

  const sendRequest = useCallback(async (url, config = { method: "GET" }) => {
    setIsLoading("Yukleniyor");

    const result = await fetch(url, config)
      .then(response => response.json())
      .then(response => responseFn(response))
      .catch(error => {
        setHasError("Beklenmedik bir hata");
      })

    setIsLoading("Yuklendi");
    setData(result);
  }, [])

  return {
    data,
    isLoading,
    hasError,
    sendRequest
  }
}

export default useHttp;