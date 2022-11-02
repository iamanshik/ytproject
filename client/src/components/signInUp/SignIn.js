import React, { useContext } from "react";
import Contexts from "../../context/Context";
import "./sign.css";
export default function SignIn() {
  const { loginDataBase } = useContext(Contexts.Notecontext);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  // console.log(formData.password.length);
  function handleSubmit(event) {
    event.preventDefault(); // to dont refresh the page. and also to not paste credentials in url.
    if (formData.email.length === 0) {
      alert("please Provide Credentials");
    } else {
      if (formData.password.length < 8) {
        alert("password must be eigth laters");
      } else {
        // alert('you  are loggged in')
        loginDataBase(formData.email, formData.password);
      }
    }
  }
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
          <form onSubmit={handleSubmit}>
            <h1>My Web App</h1>
            <h2>Sign in</h2>
            <p>Use your My Web App Account</p>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              placeholder="Password"
            />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
