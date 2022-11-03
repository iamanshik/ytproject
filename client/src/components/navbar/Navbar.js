import React,{useContext} from "react";
import contexts from '../../context/Context'
import "./Navbar.css";
export default function Navbar() {
  const contextt =useContext(contexts.Notecontext)
  const [Menu, setMenu] = React.useState(false);
  const [Findicon, setFindicon] = React.useState(false);
  let k = contextt.k
// console.log(contextt.k)
  return (
    <>
      <div className="Navbar">
        <div className="left">My Web App</div>

        <div className="mid">
          <input type="text" className="input inputBtn" id={Findicon? "hiddenFind":""} placeholder="Search..." />
          <button className="button searchBtn" id={Findicon? "hiddenFindBtn":""}>Search</button>
          <button onClick={()=>setFindicon(!Findicon)}  className="searchMobile">Find</button>
        </div>

        <div className="right">
          <nav className="links" id={Menu? "hidden":""}>
            <a href="/">About</a>
            <a href="/">Home</a>
            <a style={k===true?{display: "none"}:{display: 'flex'}} href="/">Login</a>
            <a style={k===true?{display: "none"}:{display: 'flex'}} href="/">SignUp</a>    
            <a style={k===true?{display: "flex"}:{display: "none"}}> user</a>
          </nav>
          <button onClick={()=>setMenu(!Menu)} >Menu</button>
        </div>
      </div>
    </>
  );
}
