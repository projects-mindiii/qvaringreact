import React, {useState} from "react";
import {HistoryHelper} from '../helpers/history.js'
import { Link } from 'react-router-dom';
import {Container, Button, Row, Col} from 'react-bootstrap';
import Banner from '../commonBanner/Banner.js'
import { BiSearch } from 'react-icons/bi';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import "./History.css";
const History = () =>{

return(
<>
<Banner />
<div className="qv_recharge_wrapper">
   <Container>
    <div className="qv_history_wrapper">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="recharge" title="Recharge History">
       <div className="qv_history_recharge_search">
        <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Search Mobile Number" />
            </Form.Group>
            <Link><BiSearch /></Link>
        </Form>
        <ul>
        {HistoryHelper.rechargeHistory.map((rechargeHistory, index) => (
            <li>
                <div class="qv_history_recharge_box">
                    <div class="qv_history_recharge_info">
                        <div class="qv_history_recharge_icon">
                            <img src={rechargeHistory.rechargeHistoryImg} alt="Operator"/>
                        </div>
                        <div class="qv_history_recharge_name">
                            <h5>{rechargeHistory.rechargeHistoryNumber}</h5>
                            <p>{rechargeHistory.rechargeHistoryDate}</p>
                            <p>{rechargeHistory.rechargeHistoryRecvAmt}</p>
                            <p>{rechargeHistory.rechargeHistoryRechAmt}</p>
                            <p>{rechargeHistory.rechargeHistoryDisAmt}</p>
                        </div>
                        <div class="qv_recharge_pain_amt">
                        <h3>{rechargeHistory.rechargeHistoryPaidAmt}</h3>
                        </div>
                        <div class="qv_recharge_type">
                        <h3>{rechargeHistory.rechargeHistoryPlnTyp}</h3>
                        </div>
                    </div>
                    <div class="qv_history_status_sec">
                    <div class="qv_history_status">
                        <h5>{rechargeHistory.rechargeHistoryStatusTxt} <span className={`${rechargeHistory.statusClass}`}> {rechargeHistory.rechargeHistorySuccess}</span></h5>
                    </div>
                    <div class="qv_history_status_rpt">
                        <button>{rechargeHistory.rechargeHistoryBtn}</button>
                        <span><img src={rechargeHistory.rechargeHistoryDlt} alt="Delete" /></span>
                    </div>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        <div class="view_more_btn">
            <button>View More</button>
        </div>
       </div>
      </Tab>
      <Tab eventKey="wallet" title="Wallet History">
      <div className="qv_history_recharge_search">
        <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Search Mobile Number" />
            </Form.Group>
            <Link><BiSearch /></Link>
        </Form>
        <ul>
        {HistoryHelper.walletHistory.map((walletHistory, index) => (
            <li>
                <div class="qv_history_recharge_box">
            <div class="qv_history_recharge_info qv_history_wallet_info">
                <div class="qv_history_recharge_name">
                    <h5>{walletHistory.rechargeWalletNumber}</h5>
                    <p>{walletHistory.rechargeWalletDate}</p>
                </div>
                <div class="qv_wallet_hstry_amt">
                    <h6 class="green_text">{walletHistory.rechargeWalletAmt}</h6>
                </div>
            </div>
            <div class="qv_history_status_sec">
              <div class="qv_history_status">
                  <h5>{walletHistory.rechargeWalletName}</h5>
              </div>
              <div class="qv_history_status_rpt">
              <span><img src={walletHistory.rechargeWalletDlt} alt="Delete" /></span>
              </div>
            </div>
        </div>
            </li>
            ))}
        </ul>
        <div class="view_more_btn">
            <button>View More</button>
        </div>
       </div>
      </Tab>
      <Tab eventKey="sms" title="SMS History">
      <div className="qv_history_recharge_search qvSMSHistoryTab">
        <ul>
        {HistoryHelper.SMSHistory.map((SMSHistory, index) => (
            <li>
            <div class="qv_history_recharge_box">
                <div class="qv_history_recharge_info">
                    <div class="qv_history_recharge_icon">
                        <img src={SMSHistory.rechargeSMSUser} alt="User"/>
                    </div>
                    <div class="qv_history_recharge_name">
                        <h5>{SMSHistory.rechargeSMSNumber}</h5>
                        <p>{SMSHistory.rechargeSMSDate}</p>
                        <span>{SMSHistory.rechargeSMSTxt}</span>
                    </div>
                    <div class="qv_history_sms_dlt">
                        <span><img src={SMSHistory.rechargeSMSDlt} alt="Delete" /></span>
                    </div>
                </div>
            </div>
            </li>
            ))}
        </ul>
        <div class="view_more_btn">
            <button>View More</button>
        </div>
       </div>
      </Tab>
    </Tabs>
    </div>
   </Container>
</div>

</>
);
};
export default History;