import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { BiArrowBack } from 'react-icons/bi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Operator1 from '../../assets/images/operators/operator1.webp';
import Operator3 from '../../assets/images/operators/operator3.webp';
import Operator4 from '../../assets/images/operators/operator4.webp';
import Offer from '../../assets/images/offers.webp';
import OfferApply from '../../assets/images/offer-apply.webp';
import RightArrow from '../../assets/images/right_arrow_ico.webp';
import OperatorIcon from '../../assets/images/operator_icon1.webp'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {RechargeHelper} from '../helpers/recharge.js'
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import "./Recharge.css";
const Recharge = () =>{
const [value, setValue] = useState()
return(
<>
<Banner />
<div className="qv_recharge_wrapper">
   <Container>
      <Row>
         <Col>
         <div className="qv_recharge_section qv_recharge_left_sec">
            <h5 className="qv_heading_two">Recharge</h5>
            <div className="qv_operator_select" data-toggle="modal" data-target="#selectRechargeOperator">
               <div className="qv_operator_select_img">
                  <img src={OperatorIcon} />
               </div>
               <div className="qv_operator_type">
                  <img src={Operator1} alt="Devider" />
               </div>
               <span><i className="fas fa-caret-down"></i></span>
            </div>
            <div className="qv_operator_box">
               <h5>Cubacel Reserve Your Recharge</h5>
               <p>Pay for your recharge today and we will deliver it on the first day of the Cubacel promotion (March 7, 2022)</p>
               <div className="qv_recharge_schedule">
               <Form>
                {['radio'].map((type) => (
                    <div className="qv_recharge_schedule" key={`inline-${type}`}>
                    <Form.Check
                        inline
                        label="Book Your Recharge"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Recharge Now"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
                </Form>
               </div>
               <div className="selectOffer">
                  <img src={Offer} alt="operators" />
               </div>
            </div>
            <div className="qv_operator_mobile_no">
               <h5 className="qv_heading_two">Mobile Number</h5>
               <div className="floatLable RechargeMobileInput">
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
            <div className="qv_operator_section qvRechargePageInput">
               <div className="form-group radioGroup sendType rechargeType">
                  <label className="radioPaymnt mr-3">
                     <input type="radio" name="transferClientType" value="1" className="required" />
                     <div className="recharge_type">
                        <p>Recharge <span>Recommended</span></p>
                        <h5>Super Saving <sup data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Save 40%. Estimated arrival time 1hr or less"><i className="fas fa-info-circle"></i></sup></h5>
                     </div>
                  </label>
                  <label className="radioPaymnt mr-3">
                     <input type="radio" name="transferClientType" value="2" className="required" />
                     <div className="recharge_type">
                        <p>Recharge</p>
                        <h5>Economy <sup data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Save 40%. Estimated arrival time 1hr or less"><i className="fas fa-info-circle"></i></sup></h5>
                     </div>
                  </label>
               </div>
            </div>
            <div className="qv_recharge_all_plans qv_operator_section">
               <h5 className="qv_heading_two">All Plans</h5>
               <div className="form-group radioGroup sendType rechargeType">                
              {RechargeHelper.plans.map((plans, index) => (
             <label className="radioPaymnt qv_recharge_all_plans_box">
                <input type="radio" name="transferClientType" value="4" className="required" />
                <div className="recharge_type">
                   <div className="qv_recharge_all_plans_heading">
                      <p>{plans.planPrice}</p>
                      <span>{plans.planOffer}</span>
                      <h5>{plans.planReturn}</h5>
                   </div>
                   <p className="light_text">{plans.planText}</p>
                </div>
             </label>
             ))}
             
          </div>
               <div className="qv_operator_btn">
                  <a href="">Add To Cart</a>
               </div>
            </div>
         </div>
         </Col>

         <Col>
         <div className="qv_recharge_section qv_recharge_right_section">
            <h5 className="qv_heading_two">My Orders</h5>
            <div className="qv_recharge_coupon_code">
               <ul>
                  <li>
                     <div className="qv_recharge_coupon_box">
                        <span><img src={OfferApply} alt="offer-apply" /></span>
                        <div className="qv_recharge_coupon_text">
                           <h6 className="blue_text"> Apply coupon code here</h6>
                        </div>
                        <button><img src={RightArrow} alt="offer-apply" /></button>
                     </div>
                  </li>
                  <li>
                     <div className="qv_recharge_coupon_box">
                        <span><img src={OfferApply} alt="offer-apply" /></span>
                        <div className="qv_recharge_coupon_text">
                           <h6 className="green_text"> 25% OFF Applied!</h6>
                           <p>
                              Lorem Ipsum is simply dummy text of the printing and type setting industry.
                           </p>
                        </div>
                        <button><i className="fas fa-times-circle"></i></button>
                     </div>
                  </li>
               </ul>
            </div>
            <ul>
            {RechargeHelper.productTotal.map((productTotal, index) => (
               <li>
                  <div className="qv_recharge_order_box">
                     <h5>{productTotal.productNo}</h5>
                     <p>{productTotal.productRecvAmt}</p>
                     <p>{productTotal.productRchrgAmt}</p>
                     <p>{productTotal.productPaidAmt}</p>
                     <p>{productTotal.productDisAmt}</p>
                     <button data-toggle="modal" data-target="#savedCardDelete">
                     <span>
                        <i className={`${productTotal.productAccDlt}`}></i>
                     
                     </span>
                     </button>
                     <h6 className="blue_text">{productTotal.productAccType}</h6>
                  </div>
               </li>
                ))}
            </ul>
            <div className="qv_recharge_order_total">
               <ul>
                  <li>
                     <h6>Recharge Amount :</h6>
                     <p>$2864.99</p>
                  </li>
                  <li>
                     <h6>Coupon Code 1 (15%) :</h6>
                     <p className="red_text">$150.00</p>
                  </li>
                  <li>
                     <h6>Coupon Code 2 (25%) :</h6>
                     <p className="red_text">$254.00</p>
                  </li>
                  <li>
                     <h6>Sub Total :</h6>
                     <p>$2864.99</p>
                  </li>
               </ul>
            </div>
            <div className="qv_operator_btn">
               <a href="/orderSummery">Finish &amp; Pay</a>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
</div>
</>
);
};
export default Recharge;