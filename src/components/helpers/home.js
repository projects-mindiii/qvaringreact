import Operator1 from '../../assets/images/operators/operator1.webp';
import Operator3 from '../../assets/images/operators/operator3.webp';
import Operator4 from '../../assets/images/operators/operator4.webp';

export class HomeHelper {
	static Operators = [
		{
			operatorImg : `${Operator1}`,
			operatorTxt: 'Book Your Recharge',
			
		},
        {
			operatorImg : `${Operator1}`,
			operatorTxt: 'Recharge Now',
			offerDisplay: 'offerDisplayNone'
		},
        {
			operatorImg : `${Operator3}`,
			operatorTxt: 'Recharge Amount',
			offerDisplay: 'offerDisplayNone'
		},
        {
			operatorImg : `${Operator4}`,
			operatorTxt: 'Landline',
			offerDisplay: 'offerDisplayNone'
		},

	];
}

