import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddCard from '../../assets/images/add-card.webp';
import 'react-phone-input-2/lib/style.css';
import {PaymentHelper} from '../helpers/payment';
import {RechargeHelper} from '../helpers/recharge';
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import "./PaymentMethod.css";
const PaymentMethod = () =>{
    const [addNewCard, setAddNewCard] = useState(false);

    const AddNewCard = () => {addNewCard?setAddNewCard(false):setAddNewCard(true)};
return(
<>
<Banner />
<div className="qv_recharge_wrapper qvOrderSummaryWrapper">
   <Container>
   <Row>
         <Col>
         <div className="qv_recharge_section qvPaymentMethodType">
         <h3 class="qv_heading1">Payment Methods</h3>
         <p>Please choose your preferred payment method</p>
         <div className="qv_pay_method_wrapper">
         <p><b>Select payment method to make payment.</b></p>
         <div class="form-group radioGroup sendType rechargeType">
         {PaymentHelper.paymentMethodType.map((paymentMethodType, index) => (
            <label class="radioPaymnt">
                <input type="radio" name="transferClientType" value="3" class="required" />
                <div class="recharge_type">
                    <img src={paymentMethodType.paymentMethodImg} alt="pay-method" />
                </div>
            </label>
            ))}
                 </div>
         </div>
            <div className="qv_operator_section qvPayCreditCardInfo">
               <h5 className="qv_heading_two">Credit Card Info</h5>
               <div className="form-group radioGroup sendType rechargeType">                
              {PaymentHelper.CreditCardInfo.map((CreditCardInfo, index) => (
             <label className="radioPaymnt">
                <input type="radio" name="transferClientType" value="4" className="required" />
                <div className="recharge_type">
                <div class="qv_pay_card_info_box">
                    <div class="qv_pay_card_icon">
                    <span><img src={CreditCardInfo.paymentCreditCardIcon} alt="pay-method" /></span>
                    <i className={`${CreditCardInfo.paymentCreditCardPrimary}`}></i>
                    <div class="qv_pay_card_no">
                        <h5>{CreditCardInfo.paymentCreditCardNo}</h5>
                        <p>{CreditCardInfo.paymentCreditCardDate}</p>
                    </div>
                    </div>
                    <div class="qv_pay_card_no">
                    <span>{CreditCardInfo.paymentCreditCardBtn}</span>
                    </div>
                </div>
                </div>
             </label>
             ))}
             
          </div>
          <div class="qv_add_more_card">
                         <button onClick={AddNewCard}><span><i class="fas fa-plus-circle"></i></span> Add new card</button>
                     </div>
          <div class="qv_recharge_order_total">
                    <ul class="qv_pay_mthd_total">
                        <li>
                            <h6>Sub Total :</h6>
                            <p>$2864.99</p>
                        </li>
                        <li>
                            <h6>Processing fee :</h6>
                            <p>$24.99</p>
                        </li>
                        <li>
                            <h6>Amount to Pay :</h6>
                            <p>$2964.99</p>
                        </li>
                        <li>
                            <h6>Total :</h6>
                            <p>$5964.99</p>
                        </li>
                    </ul>
                </div>
                <div class="qv_order_smry_btns">
                    <div class="qv_operator_btn2 qv_operator_btn">
                        <a>Add Another Item</a>
                    </div>
                    <div class="qv_operator_btn">
                      <a>Pay</a>
                  </div>
                </div>
            </div>
         </div>
         </Col>
      </Row>
   </Container>
</div>

{/* ===========Transaction Detail Modal============= */}
<Modal className="qv_index_modal qv_compose_msg  .modal-body removeBG" show={addNewCard} onHide={AddNewCard}>  
         <Modal.Header closeButton>
            <Modal.Title>Add New Card</Modal.Title>
         </Modal.Header>
      
         <Modal.Body className="qv_add_mny_modal_body">
            <div class="qv_email_img">
                <img src={AddCard} alt="AddMoney"/>
            </div>
            <Row>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Form>
                </Col>
                </Row>
                <Row>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter Your Address" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Select Country</option>
                            <option value="1">India</option>
                        </Form.Select>
                    </Form>
                </Col>
                </Row>
                <Row>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Select City</option>
                            <option value="1">M.P.</option>
                        </Form.Select>
                    </Form>
                </Col>
                <Col lg="6" md="12" sm="12">
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter Postal Code" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Card Number                                                          MM/YY CVC" />
                    </Form.Group>
                </Form>
            </Row>
            <p>
            Your bank will charge a small processing fee, usually between $0.50 - $1.00USD, we will use to validate your card.
             This amount will be reimbursed to you.
            </p>
         </Modal.Body>
         
         <Modal.Footer>
            <Button variant="primary">
           Add Card
            </Button>
         </Modal.Footer>
      </Modal>
</>

);
};
export default PaymentMethod;