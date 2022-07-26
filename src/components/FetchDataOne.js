import { useEffect } from "react";
import useHttp from "../hooks/use-http";

const FetchDataOne = () => {

  const responseHandler = response => response

  const { data, isLoading, hasError, sendRequest } = useHttp(responseHandler);

  useEffect(() => {

    sendRequest("https://bootcamp-2022-3c915-default-rtdb.europe-west1.firebasedatabase.app/members.json");

    let person = {
      name: "Neset",
      lastname: "Mehyedin"
    }

    let config = {
      method: "POST",
      body: JSON.stringify(person)
    }

    sendRequest("https://bootcamp-2022-3c915-default-rtdb.europe-west1.firebasedatabase.app/members.json", config);

  }, [])

  return (<div>
    <h1>Data One Component</h1>
    Error: {hasError}
    <br />
    IsLoading: {isLoading}
    <br />
    {JSON.stringify(data)}
  </div>)
}

export default FetchDataOne;