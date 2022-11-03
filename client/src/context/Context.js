import { createContext } from "react";
import data from "../components/body/newsapi";
const Notecontext = createContext();
const ContextFunc = (props) => {
  const tokenverify = () => {};
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
      .then((data) => localStorage.setItem("auto", data.authToken));
    console.log(localStorage.getItem("auto"));
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
  const deleteVid = (urlId) => {
    console.log(urlId);
    fetch(`http://localhost/api/234534`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const upload = (id) => {
    console.log(id);
    fetch(`http://localhost/api/234534`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  let k = true;
  return (
    <Notecontext.Provider
      value={{ SignUpDataBase, loginDataBase, tokenverify, k, deleteVid }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};
export default { ContextFunc, Notecontext };
