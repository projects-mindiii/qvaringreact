import React from "react";
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
const Header = () =>{
return(
<>
<div className="qv_home_wrapper">
   <Navbar expand="lg is-sticky">
      <Container>
         <Navbar.Brand href="#home"><img className="w-auto h-auto " src={Logo} /></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navMenu">
               <Nav.Link className="active" exact to="/" href="">Home</Nav.Link>
               <Nav.Link href="">Recharge</Nav.Link>
               <Nav.Link href="">History</Nav.Link>
               <Nav.Link href="">Messaging</Nav.Link>
               <Nav.Link className="qv_noti_section" href="">
                  <span><img src={Profile} /></span>  My Profile
               </Nav.Link>
               <Nav.Link className="qv_noti_section" href="add-money.html">
                  <span><i class="fas fa-wallet"></i></span> $0.00
               </Nav.Link>
               <Nav.Link className="qv_noti_section" href="add-money.html">
                  <span><i class="fas fa-cart-plus"></i></span>
                  <span class="noti-count">5</span>
               </Nav.Link>
               <Nav.Link className="qv_noti_section" href="add-money.html">
                  <span><i class="fas fa-bell notification_ico"></i></span>
               </Nav.Link>
               <Nav.Link className="qv_noti_section" href="add-money.html">
                  <span>
                     <MdOutlineLogout />
                  </span>
               </Nav.Link>
               <Nav.Link className="qv_noti_section" href="">
               <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={English} alt="English"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href=""><img src={Spain} alt="Spain"/> Spanish</Dropdown.Item>
                    <Dropdown.Item href=""><img src={English} alt="English"/> English</Dropdown.Item>
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