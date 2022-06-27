import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import "./Home.css";

const Home = () =>{
    return(
        <>
            <section className="IndexPageBG">
                <div className="homeRchrgTypeSec">
                    <div class="qv_banner_text">
                        <h2>iTriple Saldo Principal!</h2>
                        <p>Por cada recarga de 500 CUP Reciben 1500 CUP de saldo principal</p>
                    </div>
                    <div class="qv_operator_section qvIndexSelectRechType">
                        <div class="form-group radioGroup sendType rechargeType">
                            <label class="radioPaymnt">
                                <input type="radio" name="transferClientType" value="1" class="required"/>
                                <div class="recharge_type">
                                    <p>Recharge <span>Recommended</span></p>
                                    <h5>Super Saving
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
                                        >
                                        {({ ref, ...triggerHandler }) => (
                                            <sup
                                            variant="light"
                                            {...triggerHandler}
                                            className="d-inline-flex align-items-center"
                                            >

                                            <BsInfoCircleFill />
                                            </sup>
                                        )}
                                    </OverlayTrigger>
                                </h5>
                                </div>
                            </label>
                            <label class="radioPaymnt">
                                <input type="radio" name="transferClientType" value="2" class="required" />
                                <div class="recharge_type">
                                    <p>Recharge</p>
                                    <h5>Economy <sup class="info_tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save 40%. Estimated arrival time 1hr or less"><BsInfoCircleFill /></sup></h5>
                                </div>
                            </label>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    );
};

export default Home;