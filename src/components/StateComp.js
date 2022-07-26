import { useState } from "react";

const StateComp = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [bootcamp, setBootcamp] = useState("");

  const updateInfo = () => {
    setName("Tolga");
    setLastname("Egilmezel");
    setBootcamp("Kodluyoruz");
  }

  const clearInfo = () => {
    setName("");
    setLastname("");
    setBootcamp("");
  }

  return (<div>
    <h1>State Component</h1>
    Name: {name}
    <br />
    Lastname: {lastname}
    <br />
    Bootcamp: {bootcamp}
    <br />
    <button onClick={updateInfo}>Bilgileri guncelle</button>
    <button onClick={clearInfo}>temizle</button>
  </div>)
}

export default StateComp;