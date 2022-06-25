import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Logo from '../../assets/images/white-logo.webp';
import Advertisment from '../../assets/images/loudspeaker.webp';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Header.css";

const Header = () =>{
    return(
        <>
           <div className="qv_home_wrapper">
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="w-auto h-auto " src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navMenu">
                        <Nav.Link className="active" exact to="/" href="">Home</Nav.Link>
                        <Nav.Link href="">MEET Qvaring</Nav.Link>
                        <Nav.Link href="">Sign IN</Nav.Link>
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