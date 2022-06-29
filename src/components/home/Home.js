import React, {useState} from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Operator1 from '../../assets/images/operators/operator1.webp';
import Operator3 from '../../assets/images/operators/operator3.webp';
import Operator4 from '../../assets/images/operators/operator4.webp';
import Offer from '../../assets/images/offers.webp';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, NavLink } from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';
import HomeHeader from './homeHeader.js'
import "./Home.css";
const Home = () =>{
// creating a state for the section switch
const [switchBox, setSwitchBox] = useState(false);
const [value, setValue] = useState()
console.log("switchBox",switchBox)
return(
<>
<HomeHeader />
<section className="IndexPageBG">
   <div className={` ${switchBox ? 'HomeSecChange homeRchrgTypeSec': "homeRchrgTypeSec"}` }>
   <div className="qv_banner_text">
      <h2>iTriple Saldo Principal!</h2>
      <p>Por cada recarga de 500 CUP Reciben 1500 CUP de saldo principal</p>
   </div>
   <div className="qv_operator_section qvIndexSelectRechType">
      <div className="form-group radioGroup sendType rechargeType">
         <label className="radioPaymnt">
            <input type="radio" name="transferClientType" value="1" className="required" onClick={()=>{switchBox?setSwitchBox(false):setSwitchBox(true)}}/>
            <div className="recharge_type">
               <p>Recharge <span>Recommended</span></p>
               <h5>
                  Super Saving
                  <OverlayTrigger
                  placement="bottom"
                  overlay={
                  <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
                  }
                  >
                  {({ ref, ...triggerHandler }) => (
                  <sup
                     variant="light"
                     {...triggerHandler}
                     className="d-inline-flex align-items-center"
                     >
                     <BsInfoCircleFill />
                  </sup>
                  )}
                  </OverlayTrigger>
               </h5>
            </div>
         </label>
         <label className="radioPaymnt">
            <input type="radio" name="transferClientType" value="2" className="required" onClick={()=>{switchBox?setSwitchBox(false):setSwitchBox(true)}}/>
            <div className="recharge_type">
               <p>Recharge</p>
               <h5>
                  Economy 
                  <sup className="info_tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save 40%. Estimated arrival time 1hr or less">
                     <BsInfoCircleFill />
                  </sup>
               </h5>
            </div>
         </label>
      </div>
   </div>
   </div>
   <div className={`HomeSecHide ${switchBox ? 'HomeSecShow homeRchrgTypeSec': "homeRchrgTypeSec"}` }>
   <div className="qv_banner_text">
      <h2>iTriple Saldo Principal!</h2>
      <p>Por cada recarga de 500 CUP Reciben 1500 CUP de saldo principal</p>
   </div>
   <div className="qv_operator_wrapper qvIndexOperatorSec">
      <h3 className="qv_heading1">Select Operator</h3>
      <div className="qv_operator_section qvSelectOperator">
         <div className="form-group radioGroup sendType rechargeType qvIndexOperatorTypes">
            <label className="radioPaymnt">
               <input type="radio" name="transferClientType" value="3" className="required" />
               <div className="qv_operator_box recharge_type">
                  <img src={Operator1} alt="operators" />
                  <p>Book Your Recharge</p>
                  <div className="selectOffer">
                     <img data-bs-toggle="modal" data-bs-target="#referralCode" src={Offer} alt="operators" />
                  </div>
               </div>
            </label>
            <label className="radioPaymnt">
               <input type="radio" name="transferClientType" value="4" className="required" />
               <div className="qv_operator_box recharge_type">
                  <img src={Operator1} alt="operators" />
                  <p>Recharge Now</p>
               </div>
            </label>
            <label className="radioPaymnt">
               <input type="radio" name="transferClientType" value="5" className="required" />
               <div className="qv_operator_box recharge_type">
                  <img src={Operator3} alt="operators" />
                  <p>Recharge Amount</p>
               </div>
            </label>
            <label className="radioPaymnt">
               <input type="radio" name="transferClientType" value="6" className="required" />
               <div className="qv_operator_box recharge_type">
                  <img src={Operator4} alt="operators" />
                  <p>Landline</p>
               </div>
            </label>
         </div>
      </div>
   </div>
   <div className="qvIdexMobileBox">
      <h3 className="qv_heading1">Mobile Number</h3>
      <div className="qv_operator_mobile_no qvIndexSelectRechNo">
         <div className="floatLable homeMobileInput">
            <PhoneInput
               placeholder="Enter phone number"
               country="us"
               value={value}
               onChange={(value) =>
            {
            setValue(value);
            }}
            />
         </div>
      </div>
   </div>
   <div className="qv_operator_btn">
      <NavLink to='/recharge'>
      Continue</NavLink>
   </div>
   <div className="homeBackBtn">
      <Button onClick={()=>
         {switchBox?setSwitchBox(false):setSwitchBox(true)}}>
         <BiArrowBack />
      </Button>
   </div>
   </div>
</section>
<div className="app-download-content">
   <h2 className="title-heading">Download Qvaring From</h2>
   <div className="btn-box">
      <Link className="app-store-btn store_btn">
      <i className="fab fa-apple"></i>
      Download on
      <span>App Store</span>
      </Link>
      <Link className="play-store-btn store_btn">
      <i className="fab fa-google-play"></i>
      Download on
      <span> Google Play</span>
      </Link>
   </div>
</div>
<footer className="footer-area">
   <Container>
      <div className="social-links-footer">
         <ul>
            <li>
               <a href="" className="fcbook">
               <i className="fab fa-facebook-f"></i>
               </a>
            </li>
            <li>
               <a href="" className="twter">
               <i className="fab fa-linkedin"></i>
               </a>
            </li>
         </ul>
      </div>
      <p>Copyright © 20222022 - 20232023 Qvaring . All rights reserved.</p>
      <p className="ftLink">
         <Link href="/content/privacyPolicy">
         Privacy Policy
         </Link> 
         <Link href="/content/termsCondition">
         Terms of Service
         </Link>
      </p>
      <p>Help? asistencia@mail.qvaring.com</p>
   </Container>
</footer>
</>
);
};
export default Home;