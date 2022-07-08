import React, {useState} from "react";
import {MessagingHelper} from '../helpers/messaging.js'
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import User from '../../assets/images/user1.webp';
import MessageIcon from '../../assets/images/email-icon.webp';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Messaging.css";
const Messaging = () =>{
    const [value, setValue] = useState()
    const [composeMsg, setComposeMsg] = useState(false);
    const ComposeMessage = () => {composeMsg?setComposeMsg(false):setComposeMsg(true)};
return(
<>
<Banner />
<div className="qv_messaging_wrapper">
    <Container>
    <Row>
        <Col sm={12} md={6} lg={5}>
        <div className="qv_messaging_left_sec">
            <div className="qv_messaging_heading">
                <h2>Message History</h2>
            </div>    
            <div className="qv_messaging_box">
                <ul>
                {MessagingHelper.messages.map((messages, index) => (
                    <li>
                        <div className="qv_message_hstry_box">
                            <div className="qv_message_hstry_info">
                                <div className="qv_message_hstry_data">
                                    <div className="qv_history_recharge_icon">
                                        <img src={messages.messageUser} alt="User" />
                                    </div>
                                    <div className="qv_history_recharge_name">
                                        <h5>{messages.messageNumber}</h5>
                                        <p>{messages.messageText}</p>
                                    </div>
                                </div>
                                <div className="qv_left_messaging_time">
                                    <span>{messages.messageDate}</span>
                                </div>
                                <div className="qv_history_sms_dlt">
                                    <span><i className={`${messages.messageIcon}`}></i></span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
            <div className="qv_operator_btn">
                <Link onClick={ComposeMessage}>Compose New Message</Link>
            </div>
        </div>
        </Col>
        <Col sm={12} md={6} lg={7}>
        <div className="qv_messaging_right_sec">
            <div className="qv_messaging_heading">
                <h2><span><img src={User} alt="User"/></span>+53-586975458</h2>
            </div>  
            <div className="qv_messaging_box">
                <ul>
                    <li>
                        <div className="qv_message">
                            <p>Hello</p>
                            <span>12:30 PM</span>
                        </div>
                    </li>
                    <li>
                        <div className="qv_message">
                            <p>Where does it come from?</p>
                            <span>12:30 PM</span>
                        </div>
                    </li>
                    <li>
                        <div className="qv_message">
                            <p>Contrary to popular belief, Lorem 
                                Ipsum is not simply random text. 
                                It has roots in a piece of classNameical
                                Latin literature.</p>
                            <span>12:30 PM</span>
                        </div>
                    </li>
                    <li>
                        <div className="qv_message">
                            <p>Ok</p>
                            <span>12:30 PM</span>
                        </div>
                    </li>
                </ul>
                <div className="qv_type_messageP_box">
                    <input type="text" name="" placeholder="Type a message..." />
                    <span><i className="fas fa-paper-plane"></i></span>
                </div>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
</div>

{/* ===========Compose Message Modal============= */}
<Modal className="qv_index_modal qv_compose_msg  .modal-body removeBG" show={composeMsg} onHide={ComposeMessage}>  
         <Modal.Header closeButton>
            <Modal.Title>Compose Message</Modal.Title>
         </Modal.Header>
      
         <Modal.Body>
            <div class="qv_email_img">
                <img src={MessageIcon} alt="Email"/>
            </div>
            <div className="qv_compose_msg_body">
            <PhoneInput
                    placeholder="Enter phone number"
                    country="us"
                    value={value}
                    onChange={(value) =>
                    {
                    setValue(value);
                    }}
                    />

                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                        as="textarea"
                        placeholder="Type a message"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
            </div>
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
export default Messaging;