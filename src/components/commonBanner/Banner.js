import React, {useState} from "react";
import Devider from '../../assets/images/devider.webp';
import "./Banner.css";
const Banner = () =>{
return(
<>
<div className="qv_banner_wrapper">
   <div className="qv_banner_white_box">
      <p>Banner_Top to English</p>
      <img alt="Devider" src={Devider} />
   </div>
</div>
</>
);
};
export default Banner;