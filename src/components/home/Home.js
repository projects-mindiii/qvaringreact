import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Offer from "../../assets/images/offers.webp";
import GiftImg from "../../assets/images/Gift_Card_Section1.webp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, NavLink } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import HomeHeader from "./homeHeader.js";
import { HomeHelper } from "../helpers/home";
import ReactTooltip from 'react-tooltip';
import "./Home.css";
const Home = () => {
  // creating a state for the section switch
  const [switchBox, setSwitchBox] = useState(false);
  const [value, setValue] = useState();
  const [removeClass, setRemoveClass] = useState(false);

  const [referalCode, setReferalCode] = useState(false);
  const ReferalCodeModal = () => {referalCode?setReferalCode(false):setReferalCode(true)};
//   -----here i am adding anime class and change state after some time with setTimeOut-----

  useEffect(() => {
    let classAdd = document.getElementById("classAdd");
    setRemoveClass(classAdd);
  }, []);

  let backAnime = document.getElementById("backAnime");
  const animeFun = () => {
    if (switchBox) {
      setTimeout(function () {
         backAnime.classList.add("animeClass");
      }, 100);
      setTimeout(function () {
        setSwitchBox(false);
      }, 500);
    } else {
      setTimeout(function () {
        removeClass.classList.add("animeClass");
      }, 100);
      setTimeout(function () {
        setSwitchBox(true);
      }, 500);
    }
  };
//   -------------------------------------

  return (
    <>
      <HomeHeader />
      <section className="IndexPageBG">
        <div
          id="classAdd"
          className={` ${
            switchBox === false
              ? "homeRchrgTypeSec"
              : "HomeSecChange homeRchrgTypeSec"
          }`}
        >
          <div className="qv_banner_text">
            <h2>iTriple Saldo Principal!</h2>
            <p>
              Por cada recarga de 500 CUP Reciben 1500 CUP de saldo principal
            </p>
          </div>
          <div className="qv_operator_section qvIndexSelectRechType">
            <div className="form-group radioGroup sendType rechargeType">
              <label className="radioPaymnt">
                <input
                  type="radio"
                  name="transferClientType"
                  value="1"
                  className="required"
                  onClick={animeFun}
                />
                <div className="recharge_type">
                  <p>
                    Recharge <span>Recommended</span>
                  </p>
                  <h5>
                    Super Saving
                        <sup
                          data-tip="Save 40%. Estimated arrival time 1hr or less"
                          data-for="main"
                          data-iscapture="true"
                        >
                          <BsInfoCircleFill />
                        </sup>
                  </h5>
                </div>
              </label>
              <ReactTooltip
            id="main"
            place={"top"}
            type={"dark"}
            effect={"float"}
            multiline={true}
          />
              <label className="radioPaymnt">
                <input
                  type="radio"
                  name="transferClientType"
                  value="2"
                  className="required"
                  onClick={animeFun}
                />
                <div className="recharge_type">
                  <p>Recharge</p>
                  <h5>
                    Economy
                    <sup
                      className="info_tooltip"
                      data-tip="Save 40%. Estimated arrival time 1hr or less"
                      data-for="main"
                      data-iscapture="true"
                    >
                      <BsInfoCircleFill />
                    </sup>
                  </h5>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div
          id="backAnime"
          className={` ${
            switchBox ? "HomeSecShow homeRchrgTypeSec" : " HomeSecHide"
          }`}
        >
          <div className="qv_banner_text">
            <h2>iTriple Saldo Principal!</h2>
            <p>
              Por cada recarga de 500 CUP Reciben 1500 CUP de saldo principal
            </p>
          </div>
          <div className="qv_operator_wrapper qvIndexOperatorSec">
            <h3 className="qv_heading1">Select Operator</h3>
            <div className="qv_operator_section qvSelectOperator">
              <div className="form-group radioGroup sendType rechargeType qvIndexOperatorTypes">
                {HomeHelper.Operators.map((Operators, index) => (
                  <label className="radioPaymnt">
                    <input
                      type="radio"
                      name="transferClientType"
                      value="3"
                      className="required"
                    />
                    <div className="qv_operator_box recharge_type">
                      <img src={Operators.operatorImg} alt="Operators" />
                      <p>{Operators.operatorTxt}</p>
                      <div onClick={ReferalCodeModal} className={`selectOffer ${Operators.offerDisplay}`}>
                        <img src={Offer} alt="Operators" />
                      </div>
                    </div>
                  </label>
                ))}
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
                  onChange={(value) => {
                    setValue(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="qv_operator_btn">
            <NavLink exact to="/recharge">
              Continue
            </NavLink>
          </div>
          <div className="homeBackBtn">
            <Button
              onClick={animeFun}
            >
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
            <Link href="/content/privacyPolicy">Privacy Policy</Link>
            <Link href="/content/termsCondition">Terms of Service</Link>
          </p>
          <p>Help? asistencia@mail.qvaring.com</p>
        </Container>
      </footer>

      {/* ===========Verify Modal============= */}
      <Modal className="qv_index_modal .modal-body verifyCardModal" show={referalCode} onHide={ReferalCodeModal}>  
         <Modal.Header closeButton>
            <Modal.Title>Referal Code</Modal.Title>
         </Modal.Header>
      
         <Modal.Body>
         <div class="verifyCardBody">
               <div class="recharge_type">
                  <img src={GiftImg} class="img-fluid" alt="pay-method" />
               </div>
               <h3>Congratulations</h3>
               <p>You will get discount in first recharge or flat cashback when you will add money to wallet, if you have referral code please redeem below</p>
               <Form>
                  <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                     <Form.Control type="text" placeholder="Enter Referal Code" />
                  </Form.Group>
               </Form>
         </div>
         </Modal.Body>
         
         <Modal.Footer>
            <Button variant="primary">
            Continue
            </Button>
            <Button className="qv_btn_link">
            Don't have code ?
            </Button>
         </Modal.Footer>
      
      </Modal>
    </>
  );
};
export default Home;
