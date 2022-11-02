import React from "react";
import "./Body.css";
import img from "./hq720.webp";
import NewsData from './newsapi'
export default function Body() {
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
       </div>
      )

  })
  return (
    <>
      <div className="container">
      {NewsArr}
      </div>
    </>
  );
}
