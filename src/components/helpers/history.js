import OperatorIcon1 from '../../assets/images/operators/operator-icon1.webp';
import OperatorIcon2 from '../../assets/images/operators/operator-icon2.webp';
import OperatorIcon3 from '../../assets/images/operators/operator-icon3.webp';
import User1 from '../../assets/images/user1.webp';
import User5 from '../../assets/images/user5.webp';
import DeleteIcon from '../../assets/images/Detele_Ico.webp';

export class HistoryHelper {
	static rechargeHistory = [
		{
			rechargeHistoryImg : `${OperatorIcon1}`,
            rechargeHistoryNumber: '+53 - 53858642',
			rechargeHistoryDate: '09 Mar 2022, 09:48 PM',
            rechargeHistoryRecvAmt: 'Received Amount - $1500.00 CUP',
            rechargeHistoryRechAmt: 'Recharge Amount - $150.00 CUP',
            rechargeHistoryDisAmt: 'Discount - 10%',
            rechargeHistoryPaidAmt: 'Paid Amount : $366.00',
            rechargeHistoryPlnTyp: 'Super Saving',
            rechargeHistoryDlt: `${DeleteIcon}`,
            rechargeHistoryStatusTxt: 'Status',
            rechargeHistorySuccess: 'Success',
            rechargeHistoryBtn: 'Repeat',
            statusClass: 'success',
		},

        {
			rechargeHistoryImg : `${OperatorIcon2}`,
            rechargeHistoryNumber: '+53 - 53858642',
			rechargeHistoryDate: '09 Mar 2022, 09:48 PM',
            rechargeHistoryRecvAmt: 'Received Amount - $1500.00 CUP',
            rechargeHistoryRechAmt: 'Recharge Amount - $150.00 CUP',
            rechargeHistoryDisAmt: 'Discount - 10%',
            rechargeHistoryPaidAmt: 'Paid Amount : $366.00',
            rechargeHistoryPlnTyp: 'Super Saving',
            rechargeHistoryDlt: `${DeleteIcon}`,
            rechargeHistoryStatusTxt: 'Status',
            rechargeHistorySuccess: 'Pending',
            rechargeHistoryBtn: 'Repeat',
            statusClass: 'pending',
		},

        {
			rechargeHistoryImg : `${OperatorIcon3}`,
            rechargeHistoryNumber: '+53 - 53858642',
			rechargeHistoryDate: '09 Mar 2022, 09:48 PM',
            rechargeHistoryRecvAmt: 'Received Amount - $1500.00 CUP',
            rechargeHistoryRechAmt: 'Recharge Amount - $150.00 CUP',
            rechargeHistoryDisAmt: 'Discount - 10%',
            rechargeHistoryPaidAmt: 'Paid Amount : $366.00',
            rechargeHistoryPlnTyp: 'Super Saving',
            rechargeHistoryDlt: `${DeleteIcon}`,
            rechargeHistoryStatusTxt: 'Status',
            rechargeHistorySuccess: 'Cancel',
            rechargeHistoryBtn: 'Repeat',
            statusClass: 'cancel',
		},

	];

    static walletHistory = [
		{
            rechargeWalletNumber: '+53 - 53858642',
			rechargeWalletDate: '09 Mar 2022, 09:48 PM',
            rechargeWalletAmt: '$150.00',
            rechargeWalletName: 'Received From Addellena',
            rechargeWalletDlt: `${DeleteIcon}`,
		},

        {
            rechargeWalletNumber: '+53 - 53858642',
			rechargeWalletDate: '09 Mar 2022, 09:48 PM',
            rechargeWalletAmt: '$150.00',
            rechargeWalletName: 'Received From Addellena',
            rechargeWalletDlt: `${DeleteIcon}`,
		},

	];

    static SMSHistory = [
		{
            rechargeSMSUser: `${User1}`,
            rechargeSMSNumber: '+53 - 53858642',
			rechargeSMSDate: '09 Mar 2022, 09:48 PM',
            rechargeSMSTxt: 'Hello how are you ?',
            rechargeSMSDlt: `${DeleteIcon}`,
		},

        {
            rechargeSMSUser: `${User5}`,
            rechargeSMSNumber: '+53 - 53858642',
			rechargeSMSDate: '09 Mar 2022, 09:48 PM',
            rechargeSMSTxt: 'Hello how are you ?',
            rechargeSMSDlt: `${DeleteIcon}`,
		},

	];
}

