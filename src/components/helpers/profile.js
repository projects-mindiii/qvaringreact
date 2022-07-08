import SavedCard1 from '../../assets/images/saved_card1.webp'
import SavedCard2 from '../../assets/images/saved_card2.webp'
import DeleteCard from '../../assets/images/Detele_Ico.webp'

export class ProfileHelper {
	// ===========Recharge Plans=============
	static profile = [
		{
			savedCardImg : `${SavedCard1}`,
			savedCardNo: 'xxxx xxxx xxxx 2501',
			savedCardExpDate : 'Expire on : 02/24',
			savedCardDlt  : `${DeleteCard}`,
            savedCardVerify:'Verify'
		},
        {
			savedCardImg : `${SavedCard2}`,
			savedCardNo: 'xxxx xxxx xxxx 2501',
			savedCardExpDate : 'Expire on : 02/24',
			savedCardDlt  : `${DeleteCard}`,
            savedCardVerify:'Set Default',
            savedCardDefault : 'btn-secondary'
		},
        {
			savedCardImg : `${SavedCard1}`,
			savedCardNo: 'xxxx xxxx xxxx 2501',
			savedCardExpDate : 'Expire on : 02/24',
			savedCardDlt  : `${DeleteCard}`,
            savedCardVerify:'Set Default',
            savedCardDefault : 'btn-primary'
		},

	];

}

