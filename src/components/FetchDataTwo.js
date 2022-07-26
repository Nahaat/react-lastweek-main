import { useEffect } from "react";
import useHttp from "../hooks/use-http";

const FetchDataTwo = () => {

  const responseHandler = response => Object.keys(response.message)

  const { data, isLoading, hasError, sendRequest } = useHttp(responseHandler);

  useEffect(() => {
    sendRequest("https://dog.ceo/api/breeds/list/all");
  }, [])

  return (<div>
    <h1>Data Two Component</h1>
    Error: {hasError}
    <br />
    IsLoading: {isLoading}
    <br />
    {JSON.stringify(data)}
  </div>)
}

export default FetchDataTwo;