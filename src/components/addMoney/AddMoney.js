import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Wallet from '../../assets/images/wallet.webp';
import {AddMoneyHelper} from '../helpers/addMoney.js'
import AddCard from '../../assets/images/add-card.webp';
import AddMoneyIcon from '../../assets/images/money-card.webp';
import Table from 'react-bootstrap/Table';
import "./AddMoney.css";

const AddMoney = () =>{
    const [addMoney, setAddMoney] = useState(false);
    const [addNewCard, setAddNewCard] = useState(false);

    const AddMoneyWallet = () => {addMoney?setAddMoney(false):setAddMoney(true)};
    const AddNewCard = () => {addNewCard?setAddNewCard(false):setAddNewCard(true)};
  
return(
<>
<Banner />
<div className="qv_recharge_wrapper">
   <Container>
   <section class="qv_operator_container">
        <div class="qv_operator_wrapper qv_add_money_wrapper">
            <span>
                <img src={Wallet} alt="wallet" />
            </span>
            <h3>$505.00</h3>
            <p>Current amount in the wallet</p>
            <h5>Please add money from your card</h5>
            <Form>
                <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter Amount" />
                </Form.Group>
            </Form> 
            <div class="qv_order_smry_btns">
                <div class="qv_operator_btn qv_operator_btn2">
                  <a href="">Cancel</a>
              </div>
              <div class="qv_operator_btn">
                <Link onClick={AddMoneyWallet}>Proceed</Link>
            </div>
            </div>
        </div>
    </section>
   </Container>
</div>

{/* ===========Add Money to wallet Modal============= */}
<Modal className="qv_index_modal qv_compose_msg  .modal-body removeBG whiteCloseBtn" show={addMoney} onHide={AddMoneyWallet}>  
         <Modal.Header closeButton>
            <Modal.Title>Add Money</Modal.Title>
         </Modal.Header>
      
         <Modal.Body>
            <div class="qv_email_img">
                <img src={AddMoneyIcon} alt="AddMoney"/>
            </div>
            <ul class="qv_add_mny_popup">
            {AddMoneyHelper.addMoney.map((addMoney, index) => (
                    <li>
                        <div class="qv_profile_saved_card">
                            <div class="qv_pay_card_info_box">
                                <div class="qv_save_card_icon">
                                  <span><img src={addMoney.addMoneydImg} alt="pay-method" /></span>
                                  <div class="qv_pay_card_no">
                                      <h5>{addMoney.addMoneydNo}</h5>
                                      <p>{addMoney.addMoneydExpDate}</p>
                                  </div>
                                </div>
                                <div class="qv_add_mny_badge">
                                    <span class={`badge ${addMoney.addMoneydVerifyClass}`}>{addMoney.addMoneydVerify}</span>
                                    <span><img src={addMoney.addMoneydDlt} alt="pay-method" /></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
         </Modal.Body>
         
         <Modal.Footer>
            <Button onClick={()=>{AddNewCard();AddMoneyWallet();}} variant="primary">
           Add New Card
            </Button>
            <Button variant="primary">
           Done
            </Button>
         </Modal.Footer>

         <h6 class="red_text add_mny_error">Qvaring won't charge you any commission for 
                paying with a credit card.</h6>
      </Modal>
                {/* ===========Transaction Detail Modal============= */}
<Modal className="qv_index_modal qv_compose_msg  .modal-body removeBG whiteCloseBtn" show={addNewCard} onHide={AddNewCard}>  
         <Modal.Header closeButton>
            <Modal.Title>Add New Card</Modal.Title>
         </Modal.Header>
      
         <Modal.Body className="qv_add_mny_modal_body">
            <div class="qv_email_img">
                <img src={AddCard} alt="AddMoney"/>
            </div>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Form>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Form>
                        <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter Your Address" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Select Country</option>
                            <option value="1">India</option>
                        </Form.Select>
                    </Form>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Select City</option>
                            <option value="1">M.P.</option>
                        </Form.Select>
                    </Form>
                </Col>
                <Col>
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
export default AddMoney;

