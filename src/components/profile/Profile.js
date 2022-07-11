import React, {useState} from "react";
import {ProfileHelper} from '../helpers/profile.js'
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Wallet from '../../assets/images/wallet.webp';
import FilterIcon from '../../assets/images/Filter_ico.webp';
import PasswordIcon from '../../assets/images/lock.webp';
import RechargeOperator from '../../assets/images/operators/operator-icon1.webp';
import VerifyIDIcon from '../../assets/images/verify-id.webp'
import Table from 'react-bootstrap/Table';
import "./Profile.css";
import $ from 'jquery';

const Profile = () =>{
    const [transDetail, setTransDetail] = useState(false);
    const [rechargeDetail, setRechargeDetail] = useState(false);
    const [slide, setSlide] = useState(true);
    const [show, setShow] = useState(false);
    const ViewTransDetail = () => {transDetail?setTransDetail(false):setTransDetail(true)};
    const ViewRechargeDetail = () => {rechargeDetail?setRechargeDetail(false):setRechargeDetail(true)};

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // $(document).ready(function(){
    //     // Slide up displayed paragraphs
    //     $(".target").click(function(){
    //         $("flip").slideUp();
    //     });
        
    //     // Slide down hidden paragraphs
    //     $(".target").click(function(){
    //         $("flip").slideDown();
    //     });
    // });

    $(document).ready(function(){
        // Slide up displayed paragraphs
        $(".trans_history_hide").click(function(){
            $("#panel").slideUp();
           setTimeout(()=>setSlide(true),100)
        });
        
        // Slide down hidden paragraphs
        $(".target").click(function(){
            $("#flip").slideDown();
            setTimeout(()=>setSlide(false),100)
        });
    });

return(
<>
<Banner />
<div className="qv_recharge_wrapper">
   <Container>
    <div className="qvProfileWrapper">
    <Tabs
      defaultActiveKey="myWallet"
      id="uncontrolled-tab-example"
      className="mb-3 qv_profile_tab_btns"
    >
      <Tab eventKey="myWallet" title="My Wallet">
        <div className="qvProfileMyWalletWrapper">
            <div className="qv_profile_wallet_info">
                <div className="qv_profile_wallet">
                <div className="qv_profile_wallet_img">
                    <span>
                        <img src={Wallet} alt="wallet" />
                    </span>
                </div>
                <div className="qv_profile_wallet_bal">
                    <h3>$505.00</h3>
                    <p>Wallet Balance</p>
                </div>
                </div>
                <div className="qvProfileBtn">
                <Link>Add Money</Link>
            </div>
            </div>
            <div className="qv_profile_wallet_header">
                <h2>Transaction Hisotry</h2>
                <span  className={`${slide?"target":"trans_history_hide"}`}><img src={FilterIcon} alt="" /></span>
            </div>
            {/* {
            show? */}
                <div id={`${slide?"flip":"panel"}`} className="trans_history_hide_show qv_trans_type_date_wrapper showHideSlider">
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            </Form>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row> 
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <Form.Select aria-label="Default select example">
                                <option>Select Transaction Type</option>
                                <option value="1">Recharge</option>
                                <option value="2">Transfer</option>
                                <option value="3">Added From Credit Card</option>
                                <option value="4">Added By Admin </option>
                                <option value="5">Refund</option>
                                <option value="6">Deduct By Admin </option>
                            </Form.Select>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div class="qv_trans_type_date_btn">
                                <button>Search</button>
                                <button>Reset</button>
                            </div>
                        </Col>
                    </Row>                                              
                </div>
            {/* :null
} */}
            <div className="qvWalletTransitionTable">
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Date & Time</th>
                        <th>Transaction Type</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button onClick={ViewTransDetail}><span class="fas fa-eye"></span></button>
                        </tr>

                        <tr>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button><span class="fas fa-eye"></span></button>
                        </tr>

                        <tr>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button><span class="fas fa-eye"></span></button>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
      </Tab>
      <Tab eventKey="rechargeHistory" title="Recharge History">
      <div className="qvProfileMyWalletWrapper">
            <div className="qv_profile_wallet_header">
                <h2>Recharge Hisotry</h2>
                <span onClick={()=>setShow(!show)} className="trans_history_hide"><img src={FilterIcon} alt="" /></span>
            </div>
            {
            show?
            <div className="trans_history_hide_show qv_trans_type_date_wrapper">
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Form>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        </Form>
                    </Col>
                </Row> 
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <Form.Select aria-label="Default select example">
                            <option>Select Transaction Type</option>
                            <option value="1">Recharge</option>
                            <option value="2">Transfer</option>
                            <option value="3">Added From Credit Card</option>
                            <option value="4">Added By Admin </option>
                            <option value="5">Refund</option>
                            <option value="6">Deduct By Admin </option>
                        </Form.Select>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <div class="qv_trans_type_date_btn">
                            <button>Search</button>
                            <button>Reset</button>
                        </div>
                    </Col>
                </Row>                                              
            </div>
            :null
            }
            <div className="qvWalletTransitionTable">
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Phone No</th>
                        <th>Date & Time</th>
                        <th>Recharge Type</th>
                        <th>Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>+91 7440863714</span> <br/> <span className="success">Success</span></td>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button onClick={ViewRechargeDetail}><span class="fas fa-eye"></span></button>
                        </tr>

                        <tr>
                            <td><span>+91 7440863714</span> <br/> <span className="success">Success</span></td>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button><span class="fas fa-eye"></span></button>
                        </tr>

                        <tr>
                            <td><span>+91 7440863714</span> <br/> <span className="success">Success</span></td>
                            <td><span>28/05/2022,</span> <br/> <span>07:46 PM</span></td>
                            <td>Recharge</td>
                            <td>Paypal</td>
                            <button><span class="fas fa-eye"></span></button>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
      </Tab>
      <Tab eventKey="savedCard" title="Saved Card">
      <div class="qv_profile_saved_panel">
        <div class="qv_profile_wallet_header">
            <h2>Saved Card</h2>
        </div>
        <ul>
        {ProfileHelper.profile.map((profile, index) => (
            <li>
                <div class="qv_profile_saved_card">
                    <div class="qv_pay_card_info_box">
                        <div class="qv_save_card_icon">
                            <span><img src={profile.savedCardImg} alt="pay-method" /></span>
                            <div class="qv_pay_card_no">
                                <h5>{profile.savedCardNo}</h5>
                                <p>{profile.savedCardExpDate}</p>
                            </div>
                        </div>
                        <div class="qv_profile_saved_badge">
                            <span class="badge badge-success">Verified</span>
                        </div>
                    </div>
                    <div class="qv_profile_saved_dlt_sec">
                        <button data-bs-toggle="modal" data-bs-target="#verifyCard">{profile.savedCardVerify}</button>
                        <span data-bs-toggle="modal" data-bs-target="#savedCardDelete"><img src={profile.savedCardDlt} alt="pay-method" /></span>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        <div class="qv_operator_btn">
            <a href="order-summery.html">Add New Card</a>
        </div>
        </div>
      </Tab>
      <Tab eventKey="verification" title="Verification">
      <div class="qv_profile_verification_sec">
        <div class="qv_profile_verify_txt">
            <span>
                <img src={VerifyIDIcon} alt="wallet" />
            </span>
            <h5>We need to verify your ID.</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not 
            simply random text. </p>

            <div class="qv_profile_verify_upload">
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                display: "none"
                }}
            />
            <div className="profileUpdateImg"
                style={{
                height: "240px",
                width: "450px",
                border: "1px solid #f0f0f0",
                borderRadius :"10px",
                position : "relative",
                zIndex : "9"
                }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                ref={uploadedImage}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    zIndex: "9"
                }}
                />
            </div>
            </div>
            </div>
            <p>Please wait verification process under reviewk</p>
            <div class="qv_operator_btn">
                <a href="order-summery.html">Submit To Verify</a>
            </div>
        </div>
      </div>
      </Tab>
      <Tab eventKey="editProfile" title="Edit Profile">
        <div className="qvEditProfileWrapper">
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                display: "none"
                }}
            />
            <div className="imgUploadIcon"
                style={{
                    height: "150px",
                    width: "150px",
                    border: "5px solid #f0f0f0",
                    borderRadius :"100px",
                    position : "relative",
                    zIndex : "9"
                    }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                ref={uploadedImage}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius :"100px",
                    position : "relative"
                }}
                />
            </div>
            </div>
            <div className="qvEditProfileInfo">
        <Form>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" placeholder="" />
            </Form.Group>
            <div>
            {['radio'].map((type) => (
                    <div className="qvProfileGender" key={`inline-${type}`}>
                    <Form.Check
                        inline
                        label="Male"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        label="Other"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    </div>
                ))}
            </div>
        </Form>
        </div>
        <div class="qv_operator_btn">
            <Link>Done</Link>
        </div>
        </div>
      </Tab>
      <Tab eventKey="changePassword" title="Change Password">
      <div class="qv_profile_chng_pass_sec">
            <div class="qv_profile_verify_txt qv_profile_edit_sec ">
                <span>
                    <img src={PasswordIcon} alt="wallet" />
                </span>
                <h5>Do you need to update your password ?</h5>
                <p>Contrary to popular belief, Lorem Ipsum is not 
                simply random text. </p>
                <div className="qvEditProfileInfo">
        <Form>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="password" placeholder="Enter Old Password" />
            </Form.Group>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>
            <Form.Group className="Form-Item" controlId="exampleForm.ControlInput1">
                <Form.Control type="password" placeholder="Enter Confirm Password" />
            </Form.Group>
        </Form>
        </div>
                <div class="qv_order_smry_btns">
                    <div class="qv_operator_btn qv_operator_btn2">
                        <Link>Cancel</Link>
                    </div>
                    <div class="qv_operator_btn">
                        <Link>Update Password</Link>
                    </div>
                </div>
            </div>
        </div>
      </Tab>
      <Tab eventKey="changeCurrency" title="Change Currency">
        <div class="qv_profile_chng_currency">
        <div class="qv_profile_wallet_header">
            <h2>Change Currency Type</h2>
        </div>
        <Form>
            <div>
            {['radio'].map((type) => (
                    <div className="qvProfileCurrency" key={`inline-${type}`}>
                    <Form.Check
                        inline
                        label="USD"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Euro"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    </div>
                ))}
            </div>
        </Form>
        </div>
      </Tab>
    </Tabs>
    </div>
   </Container>
</div>



{/* ===========Transaction Detail Modal============= */}
<Modal className="qv_index_modal .modal-body removeBG" show={transDetail} onHide={ViewTransDetail}>  
         <Modal.Header closeButton>
            <Modal.Title>Transaction Detail</Modal.Title>
         </Modal.Header>
      
         <Modal.Body>
         <div class="rechHisDetails">
            <div class="rechHisIdBlk">
               <div class="rechargeOf">
                <div class="rechargeOfCnt">
                 <p>Payment Type</p>
                 <h2>Google pay</h2>
    
                </div>
               </div>
               <div class="rechHisId" id="trnsid">
                <h2><span>Trns Id :</span> #3242150</h2>
                <p id="time">09/10/2020, 3:27 PM</p>
               </div>
            </div>
            <div class="rechargeOfBlk">
               <div class="rechHisStatus statusSuccess">
                <p><span class="fas fa-check-circle"></span> Success</p>
               </div>
            </div>
            <div class="detlsInfoBlk">
               <h1>Transaction Summary</h1>
               <div class="detlsInfoBody paysum">
                <ul>
                 <li><span> Transaction Type</span> <b>Recharge</b></li>
                 <li><span>Opening Balance</span> <b>$ 10.1</b></li>
                 <li><span>Debit</span> <b>$ 10.1</b></li>
                 <li><span>Closing Balance</span> <b>$ 10.1</b></li>
                </ul>
               </div>
            </div>
           </div>
         </Modal.Body>
         
         <Modal.Footer>
            <Button variant="primary">
            Done
            </Button>
         </Modal.Footer>
      
      </Modal>

      {/* ===========Recharge Detail Modal============= */}
        <Modal className="qv_index_modal .modal-body removeBG" show={rechargeDetail} onHide={ViewRechargeDetail}>  
         <Modal.Header closeButton>
            <Modal.Title>Recharge Detail</Modal.Title>
         </Modal.Header>
      
         <Modal.Body>
         <div class="rechHisDetails">
            <div class="rechHisIdBlk">
               <div class="rechargeOf">
               <div class="rechargeOf">
                    <img src={RechargeOperator} alt="operator" />
                    <div class="rechargeOfCnt">
                        <p>Recharge of Airtel</p>
                        <h2>+91-9876543210</h2>
                    </div>
                </div>
               </div>
               <div class="rechHisId" id="trnsid">
                <h2><span>Order Id :</span> #3242150</h2>
                <p id="time">09/10/2020, 3:27 PM</p>
               </div>
            </div>
            <div class="rechargeOfBlk">
               <div class="rechHisStatus statusSuccess">
                <p><span class="fas fa-check-circle"></span> Success</p>
               </div>
            </div>
            <div class="detlsInfoBlk">
               <h1>Payment Summary</h1>
               <div class="detlsInfoBody paysum">
                <ul>
                 <li><span>Recharge Plan</span> <b>Top-up</b></li>
                 <li><span>Recharge Type</span> <b>Super Saving</b></li>
                 <li><span>Recharge Amount</span> <b>$ 10.1</b></li>
                 <li><span>Received Amount</span> <b>$5 and 5GB data</b></li>
                </ul>
               </div>
            </div>
            <div class="detlsInfoBlk">
               <h1>Recharge Description</h1>
               <div class="detlsInfoBody paysum">
                <p>INR 379: UL Calls + 8GB Data per day for 84 days</p>
               </div>
            </div>
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
export default Profile;