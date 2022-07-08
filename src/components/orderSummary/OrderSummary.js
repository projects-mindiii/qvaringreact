import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { BiArrowBack } from 'react-icons/bi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import Operator1 from '../../assets/images/operators/operator1.webp';
import Operator3 from '../../assets/images/operators/operator3.webp';
import Operator4 from '../../assets/images/operators/operator4.webp';
import Offer from '../../assets/images/offers.webp';
import OfferApply from '../../assets/images/offer-apply.webp';
import RightArrow from '../../assets/images/right_arrow_ico.webp';
import DeleteIcon from '../../assets/images/alert.webp'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {RechargeHelper} from '../helpers/recharge.js'
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import "./OrderSummary.css";
const OrderSummary = () =>{
const [deletePopup, setDeletePopup] = useState(false);
const [applyCoupon, setApplyCoupon] = useState(false);

const DeletePopupConfirm = () => {deletePopup?setDeletePopup(false):setDeletePopup(true)};
const ApplyCoupon = () => {applyCoupon?setApplyCoupon(false):setApplyCoupon(true)};
return(
<>
<Banner />
<div className="qv_recharge_wrapper qvOrderSummaryWrapper">
   <Container>
      <Row>
         <Col>
         <div className="qv_recharge_section qv_recharge_right_section">
            <h5 className="qv_heading_two">My Orders</h5>
            <div className="qv_recharge_coupon_code">
               <ul>
                  <li>
                     <div className="qv_recharge_coupon_box" onClick={ApplyCoupon}>
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
                     <button onClick={DeletePopupConfirm}>
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
               <Link to="/payment-method">Finish &amp; Pay</Link>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
</div>

{/* ===========Apply Coupon Modal============= */}
      <Modal className="qv_index_modal .modal-body removeBG" show={applyCoupon} onHide={ApplyCoupon}>  
         <Modal.Header closeButton>
            <Modal.Title>Apply Coupon Code</Modal.Title>
         </Modal.Header>
      
         <Modal.Body className="selectRechargeOperatorBody">
         <div class="apply_coupon_input">
         <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
               <Form.Control type="text" placeholder="Enter Coupon Code" />
            </Form.Group>
         </Form>
         <Button><img src={RightArrow} alt="offer-apply" /></Button>
         </div>
         <ul>
         {RechargeHelper.rechargeCouponCode.map((rechargeCouponCode, index) => (
            <li>
               <div class="qv_recharge_order_box apply_coupon_box">
                  <h5>{rechargeCouponCode.rchrgCouponOffer}</h5>
                  <p>{rechargeCouponCode.rchrgCouponTxt}</p>
                  <div class="apply_coupon__btn">
                     <p>{rechargeCouponCode.rchrgCouponValidDate}</p>
                     <button>{rechargeCouponCode.rchrgCouponBtn}</button>
                  </div>    
               </div>
            </li>
         ))}
         </ul>
         </Modal.Body>
         
         <Modal.Footer>
            <Button variant="primary">
            Done
            </Button>
         </Modal.Footer>
      
      </Modal>

      {/* ===========Delete Modal============= */}
        <Modal className="qv_index_modal qv_compose_msg  .modal-body removeBG DeletePopup" show={deletePopup} onHide={DeletePopupConfirm}>  
         <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
         </Modal.Header>
      
         <Modal.Body className="DeletePopupBody">
            <div class="delete_popup_img">
            <img src={DeleteIcon} alt="Email"/>
            </div>
            <h6>Are you sure you want to delete this card ?</h6>

         </Modal.Body>
         
         <Modal.Footer>
            <Button variant="primary">
            Done
            </Button>
         </Modal.Footer>
      
      </Modal>
</>

);
};
export default OrderSummary;