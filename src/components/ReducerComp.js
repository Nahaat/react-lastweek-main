import { useReducer } from "react";

const INITSTATE = {
  name: "",
  lastname: "",
  bootcamp: ""
}

const infoReducer = (state, action) => {
  if (action?.type == "UPDATE") {
    return {
      ...action
    }
  }

  if (action?.type == "NAME") {
    return {
      ...state,
      name: action.name
    }
  }

  if (action.type == "DELETE") {
  }
  if (action.type == "ADD") {

  }
  if (action.type == "CLEAR") { }

  return {
    ...INITSTATE
  }
}

const ReducerComp = () => {

  const [info, dispatch] = useReducer(infoReducer, INITSTATE)

  const updateInfo = () => {
    dispatch({ type: "UPDATE", name: "Tolga", lastname: "Egilmezel", bootcamp: "Kodluyoruz" })
  }

  const clearInfo = () => {
    dispatch()
  }

  return (<div>
    <h1>Reducer Component</h1>
    Name: {info.name}
    <br />
    Lastname: {info.lastname}
    <br />
    Bootcamp: {info.bootcamp}
    <br />
    <button onClick={updateInfo}>Bilgileri guncelle</button>
    <button onClick={clearInfo}>temizle</button>
  </div>)
}

export default ReducerComp;