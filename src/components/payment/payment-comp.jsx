import React, { useState } from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';

import { PaymentContainer, SectionHeading, NameInput, PayButton } from './payment-styles';

const Payment = ({ onPay }) => {
	const [ cardDetails, setCardDetails ] = useState(null);
	const [ name, setName ] = useState('');

	const handleChange = formData => {
		const { values, status } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
		if (isIncomplete) setCardDetails(null);
		else setCardDetails(values);
	};

	return (
		<PaymentContainer>
			<SectionHeading>Payment</SectionHeading>
			<NameInput label="Name" value={name} onChangeText={text => setName(text)} />
			<LiteCreditCardInput onChange={handleChange} />
			<PayButton disabled={!cardDetails || !name.length} onPress={() => onPay(cardDetails, name)}>
				Pay
			</PayButton>
		</PaymentContainer>
	);
};

export default Payment;
