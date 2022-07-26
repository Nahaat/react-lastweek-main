import useInput from "../../hooks/use-input";

const inputValueisEmpty = (value) => value == "" ? true : false;

const inputValueHasEmail = (value) => !(value.indexOf("@") > -1)

const InputComp = () => {

  const {
    value: inputUsername,
    isError: isUsernameError,
    inputHandler: inputUsernameHandler
  } = useInput(inputValueisEmpty);

  const {
    value: inputEmail,
    isError: isEmailError,
    inputHandler: inputEmailHandler
  } = useInput(inputValueHasEmail);

  return (<div>
    <label>
      <input name="Username" value={inputUsername} onChange={inputUsernameHandler} onBlur={inputUsernameHandler} />
      {isUsernameError && <p>Hatali giris yaptiniz</p>}
    </label>

    <label>
      <input name="Email" value={inputEmail} onChange={inputEmailHandler} onBlur={inputEmailHandler} />
      {isEmailError && <p>Hatali giris yaptiniz</p>}
    </label>
  </div>)
}

export default InputComp;