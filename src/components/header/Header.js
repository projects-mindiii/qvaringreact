import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/white-logo.webp';
import Advertisment from '../../assets/images/loudspeaker.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import Profile from '../../assets/images/profile.webp'
import { MdOutlineLogout } from 'react-icons/md';
import English from '../../assets/images/english.webp'
import Spain from '../../assets/images/spain.webp'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () =>{
   const [notify, setNotify] = useState(true);
   console.log("notify", notify)
return(
<>
<div className="qv_home_wrapper">
   <Navbar expand="lg is-sticky">
      <Container>
         <Navbar.Brand href="#home"><img className="w-auto h-auto " src={Logo} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navMenu">
               <NavLink exact to="/">Home</NavLink>
               <NavLink exact to="/recharge">Recharge</NavLink>
               <NavLink to="/history">History</NavLink>
               <NavLink to="/messaging">Messaging</NavLink>
               <NavLink to="/profile" className="qv_noti_section">
                  <span><img src={Profile} /></span>  My Profile
               </NavLink>
               <NavLink to="/add-money" className="qv_noti_section">
                  <span><i class="fas fa-wallet"></i></span> $0.00
               </NavLink>
               <NavLink to="/order-summary" className="qv_noti_section">
                  <span><i class="fas fa-cart-plus"></i></span>
                  <span class="noti-count">5</span>
               </NavLink>
               <Nav.Link className="qv_noti_section">
                  <span onClick={()=>{notify?setNotify(false):setNotify(true)}}><i class="fas fa-bell notification_ico"></i></span>
                  <div id="notify_popyp" className={`${notify?"hideNotify":""}`}>
                    <div class="notify_popyp_box">
                        <div class="notify_popyp_heading">
                            <h5>Notification</h5>
                        </div>
                        <ul>
                            <li>
                                <div class="notify_popyp_body">
                                    <div class="notify_popyp_txt">
                                        <h5>Lorem ipsum dolor sit</h5>
                                        <p>Ut enim ad minim veniam, quis nostrud aliquip ex ea commodo consequat.</p>
                                        <h6><span class="date">05/04/2022</span> <span class="time">10:48 AM</span></h6>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="notify_popyp_body">
                                    <div class="notify_popyp_txt">
                                        <h5>Lorem ipsum dolor sit</h5>
                                        <p>Ut enim ad minim veniam, quis nostrud aliquip ex ea commodo consequat.</p>
                                        <h6><span class="date">05/04/2022</span> <span class="time">10:48 AM</span></h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
               </Nav.Link>
               <Nav.Link className="qv_noti_section">
                  <span>
                     <MdOutlineLogout />
                  </span>
               </Nav.Link>
               <Nav.Link className="qv_noti_section">
               <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={English} alt="English"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><img src={Spain} alt="Spain"/> Spanish</Dropdown.Item>
                    <Dropdown.Item><img src={English} alt="English"/> English</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
               </Nav.Link>
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
</>
);
};
export default Header;