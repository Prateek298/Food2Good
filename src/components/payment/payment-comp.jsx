import React, { useState, useContext } from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { TextInput } from 'react-native-paper';

import { Text, Spacer } from '../utilities';
import { PayButton } from './payment-styles';

import VerifyEmail from '../verifyEmail/verifyEmail-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const Payment = ({ onPay }) => {
	const [ cardDetails, setCardDetails ] = useState(null);
	const [ name, setName ] = useState('');
	const { user: { emailVerified } } = useContext(AuthContext);

	const handleChange = formData => {
		const { values, status } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
		if (isIncomplete) setCardDetails(null);
		else setCardDetails(values);
	};

	return (
		<Spacer variants="pl-2 pr-2 mt-2 mb-3">
			<Spacer variants="m-2">
				<Text size="title" weight="bold">
					Payment
				</Text>
			</Spacer>
			<Spacer variants="mt-2 mb-3">
				<TextInput label="Name" value={name} onChangeText={text => setName(text)} />
			</Spacer>
			<LiteCreditCardInput onChange={handleChange} />
			<VerifyEmail screen="checkout" />
			<PayButton
				disabled={!cardDetails || !name.length || !emailVerified}
				onPress={() => onPay(cardDetails, name)}
			>
				Pay
			</PayButton>
		</Spacer>
	);
};

export default Payment;
