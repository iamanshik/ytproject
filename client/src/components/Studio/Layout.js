import React,{useContext} from "react";
import contextApi from '../../context/Context'
import "../body/Body.css";
import img from "../body/hq720.webp";
import NewsData from '../body/newsapi'
import {AiFillDelete,AiOutlineEdit} from 'react-icons/ai'
export default function Body() {
 const apifunc = useContext(contextApi.Notecontext)

  let NewsArr = NewsData.map((dataPacket)=>{
      return (
        <div className="box" >
        <div className="img">
          {/* <img src={dataPacket.urlToImage} alt="" /> */}
          <img src={img} alt="" />
        </div>
        <h2>
          {dataPacket.title}
        </h2>
        <h3>{dataPacket.author}</h3>
        <div className="apiButtons">

        <AiFillDelete onClick={()=>apifunc.deleteVid(dataPacket.url)}/>
        <AiOutlineEdit/>
        </div>
       </div>
      )

  })
  // console.log(NewsArr)
  return (
    <>
      <div className="container">
      {NewsArr}
      </div>
    </>
  );
}