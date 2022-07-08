import SavedCard1 from '../../assets/images/saved_card1.webp'
import SavedCard2 from '../../assets/images/saved_card2.webp'
import DeleteCard from '../../assets/images/Detele_Ico.webp'

export class AddMoneyHelper {
	// ===========Recharge Plans=============
	static addMoney = [
		{
			addMoneydImg : `${SavedCard1}`,
			addMoneydNo: 'xxxx xxxx xxxx 2501',
			addMoneydExpDate : 'Expire on : 02/24',
			addMoneydDlt  : `${DeleteCard}`,
            addMoneydVerify:'Verify',
            addMoneydVerifyClass:'badge-primary'
		},
        {
			addMoneydImg : `${SavedCard1}`,
			addMoneydNo: 'xxxx xxxx xxxx 2501',
			addMoneydExpDate : 'Expire on : 02/24',
			addMoneydDlt  : `${DeleteCard}`,
            addMoneydVerify:'Expired',
            addMoneydVerifyClass:'badge-expire'
		},
        {
			addMoneydImg : `${SavedCard1}`,
			addMoneydNo: 'xxxx xxxx xxxx 2501',
			addMoneydExpDate : 'Expire on : 02/24',
			addMoneydDlt  : `${DeleteCard}`,
            addMoneydVerify:'Verified',
            addMoneydVerifyClass:'badge-success'
		},

	];

}

