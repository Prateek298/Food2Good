import stripeClient from 'stripe-client';

import { hostUrl } from '../env';

const PUBLISHABLE_KEY =
	'pk_test_51IbpeeSD3J25iOCQKzFJbEnoMH0KPHt1CXeRnOvD2mZk9QI05G3YR0tly5gdbRx8zt65Xw8l1AmahmysLjXoIOsq002CDPBfHt';
const stripe = stripeClient(PUBLISHABLE_KEY);

export const cardTokenRequest = async cardDetails => {
	try {
		const { number, expiry, cvc, name } = cardDetails;
		const [ exp_month, exp_year ] = expiry.split('/');
		const card = {
			number,
			exp_month,
			exp_year,
			cvc,
			name
		};
		const token = await stripe.createToken({ card });
		return token;
	} catch (e) {
		console.log('Card token request failure');
		return Promise.reject(e);
	}
};

export const payRequest = async (token, name, amount) => {
	try {
		const res = await fetch(`${hostUrl}/payment`, {
			method: 'POST',
			body: JSON.stringify({ token, name, amount })
		});
		const jsonRes = await res.json();
		if (res.status > 200) {
			console.log(jsonRes.error);
			return Promise.reject(jsonRes.error.raw.message);
		}
		return jsonRes;
	} catch (e) {
		console.log('Pay Request error');
		return Promise.reject(e);
	}
};
