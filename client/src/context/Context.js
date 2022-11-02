import { createContext } from "react";
import data from "../components/body/newsapi";
const Notecontext = createContext();
const ContextFunc = (props) => {
  function loginDataBase(email, password) {
    fetch(`http://localhost/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("auto",data.authToken));
      console.log(localStorage.getItem("auto"))
  }
  function SignUpDataBase(email, password) {
    // console.log(email,password)
    fetch("http://localhost/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <Notecontext.Provider value={{ SignUpDataBase, loginDataBase }}>
      {props.children}
    </Notecontext.Provider>
  );
};
export default { ContextFunc, Notecontext };
