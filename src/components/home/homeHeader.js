import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/white-logo.webp';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom';
import Advertisment from '../../assets/images/loudspeaker.webp';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./homeHeader.css";
import $ from 'jquery';

const HomeHeader = () =>{
const [login, setLoginShow] = useState(false);
const [signUp, setSignUp] = useState(false);
const [otpShow, setOtpShow] = useState(false);
const [basicInfoShow, setBasicInfoShow] = useState(false);
const [value, setValue] = useState()
// const LoginShow = () => {show?setShow(false):setShow(true)};
const LoginShow = () => {login?setLoginShow(false):setLoginShow(true)};
const SignUpShow = () => {signUp?setSignUp(false):setSignUp(true)};
const OtpModule = () => {otpShow?setOtpShow(false):setOtpShow(true)};
const BasicInfo = () => {basicInfoShow?setBasicInfoShow(false):setBasicInfoShow(true)};
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

$(document).ready(function() {
   $(window).scroll(function(){
       if ($(this).scrollTop() > 50) {
          $('.box').addClass('onScrolling');
       } else {
          $('.box').removeClass('onScrolling');
       }
   });
 });
return(
<>
<div className="qv_home_wrapper box">
   <Navbar expand="lg is-sticky">
      <Container>
         <Navbar.Brand href="#home"><img className="w-auto h-auto " src={Logo} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navMenu">
               <Nav.Link className="active" exact to="/">Home</Nav.Link>
               <Nav.Link>MEET Qvaring</Nav.Link>
               <Nav.Link onClick={LoginShow}>Sign In</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
   <div class="qvAdvertisment">
      <span><img src={Advertisment} /></span>
      <marquee>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      </marquee>
   </div>
</div>
{/* ========Modal========== */}
{/* ===========Login Modal============= */}
<Modal className="qv_index_modal .modal-body" show={login} onHide={LoginShow}>
   {/* 
   <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
   </Modal.Header>
   */}
   <Modal.Body>
      <div className="qv_login_form">
         <div className="LoginFormWrapper">
            <h3>Sign In to your account</h3>
            <p>Please enter your valid mobile number, to signin your account.</p>
         </div>
         <div className="floatLable">
            <PhoneInput className="LoginPhoneInput"
               placeholder="Enter phone number"
               country="us"
               value={value}
               onChange={(value) =>
            {
            setValue(value);
            }}
            />
         </div>
         <div className="qv_operator_btn">
            <Link>SIGN IN</Link>
         </div>
         <Link className="forgot_link">
         Forgot Password
         </Link>
         <div className="qv_login_popup_sec">
            <p>Or Sign in with</p>
            <ul>
               <li>
                  <Link><i className="fab fa-facebook-f"></i></Link>
               </li>
               <li>
                  <Link><i className="fab fa-apple"></i></Link>
               </li>
               <li>
                  <Link><i className="fab fa-google-plus-g"></i></Link>
               </li>
            </ul>
            <div className="qv_sign_up_link">
               <p>Don't have an account? <button onClick={()=>{SignUpShow();LoginShow();}}>Sign Up</button></p>
            </div>
         </div>
      </div>
   </Modal.Body>
   {/* 
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
   </Modal.Footer>
   */}
</Modal>
{/* ===========Signup Modal============= */}
<Modal className="qv_index_modal .modal-body" show={signUp} onHide={SignUpShow}>
   {/* 
   <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
   </Modal.Header>
   */}
   <Modal.Body>
      <div className="qv_login_form">
         <div className="LoginFormWrapper">
            <h3>Sign In or Create your account</h3>
            <p>Please enter your valid mobile number, we will send you an OTP to verify</p>
         </div>
         <div className="floatLable">
            <PhoneInput className="LoginPhoneInput"
               placeholder="Enter phone number"
               country="us"
               value={value}
               onChange={(value) =>
            {
            setValue(value);
            }}
            />
         </div>
         <div className="qv_operator_btn">
            <Link onClick={()=>{OtpModule();SignUpShow();}}>Continue</Link>
         </div>
         <Link className="forgot_link">
         Forgot Password
         </Link>
         <div className="qv_login_popup_sec">
            <p>Or Sign in with</p>
            <ul>
               <li>
                  <Link><i className="fab fa-facebook-f"></i></Link>
               </li>
               <li>
                  <Link><i className="fab fa-apple"></i></Link>
               </li>
               <li>
                  <Link><i className="fab fa-google-plus-g"></i></Link>
               </li>
            </ul>
            <div className="qv_sign_up_link">
               <p>Already have an account? <button onClick={()=>{LoginShow();SignUpShow();}}>Sign In</button></p>
            </div>
         </div>
      </div>
   </Modal.Body>
   {/* 
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
   </Modal.Footer>
   */}
</Modal>
{/* ===========OTP Modal============= */}
<Modal className="qv_index_modal .modal-body" show={otpShow} onHide={OtpModule}>
   {/* 
   <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
   </Modal.Header>
   */}
   <Modal.Body>
      <div class="qv_login_form">
         <div class="LoginFormWrapper">
            <h3>Verify Your Number</h3>
            <p>Please enter the verification code sent to you given mobile number</p>
         </div>
         <div class="qv_confirmation_code">
            <h5>Enter your confirmation code here</h5>
            <div class="qvCodeConfirmationInput">
               <input type="text" name="" placeholder="*" />
               <input type="text" name="" placeholder="*" />
               <input type="text" name="" placeholder="*" />
               <input type="text" name="" placeholder="*" />
            </div>
         </div>
         <div class="qv_operator_btn">
            <Link onClick={()=>{BasicInfo();OtpModule();}}>Confirm</Link>
         </div>
         <Link class="forgot_link">
         Resend Code
         </Link>
      </div>
   </Modal.Body>
   {/* 
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
   </Modal.Footer>
   */}
</Modal>
{/* ===========Basic Info Form Modal============= */}
<Modal className="qv_index_modal .modal-body" show={basicInfoShow} onHide={BasicInfo}>
   {/* 
   <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
   </Modal.Header>
   */}
   <Modal.Body>
      <div class="qv_login_form">
         <div class="LoginFormWrapper">
            <h3>Fill out the Basic Info</h3>
            <p>Please fill out your basic info</p>
         </div>
         <div className="basicInfoProfile">
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
            <div className="imagePreview"
            style={{
            height: "120px",
            width: "120px",
            border: "1px solid #ccc",
            }}
            onClick={() => imageUploader.current.click()}
            >
            <img className="profileImg"
            ref={uploadedImage}
            style={{
            width: "120px",
            height: "120px"   
            }}
            />
         </div>
         {/* 
         */}
        </div>
        <div className="qvBBasicInfoRow">
        <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
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
      </div>
   </Modal.Body>
   {/* 
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
      Save Changes
      </Button>
   </Modal.Footer>
   */}
</Modal>
</>
);
};
export default HomeHeader;