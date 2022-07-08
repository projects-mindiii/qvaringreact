import CardType1 from '../../assets/images/payMethod/card-type1.webp';
import CardType2 from '../../assets/images/payMethod/card-type2.webp';
import PaymentType1 from '../../assets/images/payMethod/pay-method1.webp';
import PaymentType2 from '../../assets/images/payMethod/pay-method2.webp';
import PaymentType3 from '../../assets/images/payMethod/pay-method3.webp';
import PaymentType4 from '../../assets/images/payMethod/pay-method4.webp';
import PaymentType5 from '../../assets/images/payMethod/pay-method5.webp';

export class PaymentHelper {

    static CreditCardInfo = [
		{
            paymentCreditCardIcon : `${CardType1}`,
            paymentCreditCardNo : 'xxxx xxxx xxxx 2501',
            paymentCreditCardDate : 'Expire on : 02/24Verify',
            paymentCreditCardBtn : 'Verify',
            paymentCreditCardPrimary:'icon-none'
		},
        {
            paymentCreditCardIcon : `${CardType2}`,
            paymentCreditCardNo : 'xxxx xxxx xxxx 2501',
            paymentCreditCardDate : 'Expire on : 02/24Verify',
            paymentCreditCardBtn : 'Make Primary',
            paymentCreditCardPrimary:'icon-none'
		},
        {
            paymentCreditCardIcon : `${CardType1}`,
            paymentCreditCardNo : 'xxxx xxxx xxxx 2501',
            paymentCreditCardDate : 'Expire on : 02/24Verify',
            paymentCreditCardBtn : 'Primary',
            paymentCreditCardPrimary:'fas fa-check'
		},

	];

    static paymentMethodType = [
		{
            paymentMethodImg : `${PaymentType1}`,
		},
        {
            paymentMethodImg : `${PaymentType2}`,
		},
        {
            paymentMethodImg : `${PaymentType3}`,
		},
        {
            paymentMethodImg : `${PaymentType4}`,
		},
        {
            paymentMethodImg : `${PaymentType5}`,
		},

	];
}

