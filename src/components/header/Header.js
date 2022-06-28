import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/white-logo.webp';
import Advertisment from '../../assets/images/loudspeaker.webp';
import Profile from '../../assets/images/profile.webp'
import { MdOutlineLogout } from 'react-icons/md';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Header.css";



const Header = () =>{
    return(
        <>
           <div className="qv_home_wrapper">
            <Navbar expand="lg">
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
                                    <span><img src={Profile} /></span> My Profile
                                    </Nav.Link>
                                    <Nav.Link className="qv_noti_section" href="add-money.html">
                                        <span><i class="fas fa-wallet"></i></span> $0.00
                                    </Nav.Link>
                                    <Nav.Link className="qv_noti_section" href="add-money.html">
                                    <span><i class="fas fa-cart-plus"></i></span>
                                    <span class="noti-count">5</span>
                                    </Nav.Link>
                                    <Nav.Link className="qv_noti_section" href="add-money.html">
                                    <button href="" class="notify_popyp">
                                        <span><MdOutlineLogout /></span> 
                                    </button> 
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