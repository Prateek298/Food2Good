import React, { useContext, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';
import { Overlay, Symbol, FeedbackContainer, ConfirmButton } from './checkout-styles';

import EmptyCartScreen from './emptyCartScreen-comp';
import CartView from '../../components/cart/cart-comp';
import PaymentView from '../../components/payment/payment-comp';

import { CartContext } from '../../services/checkout/cart-context';
import { cardTokenRequest, payRequest } from '../../services/checkout/checkout-service';

const CheckoutScreen = () => {
	const { cart, clearCart } = useContext(CartContext);
	const { cartItems, restaurant, total } = cart;
	const [ isPaymentProcessing, setIsPaymentProcessing ] = useState(false);
	const [ paymentResult, setPaymentResult ] = useState(null);

	const makePayment = async (cardDetails, name) => {
		try {
			if (!name.length || !cardDetails) return;

			setIsPaymentProcessing(true);
			const token = await cardTokenRequest({ ...cardDetails, name });
			await payRequest(token.id, name, total);
			// on Payment Success
			setIsPaymentProcessing(false);
			setPaymentResult({ success: true, message: 'Payment Successful' });
		} catch (e) {
			// on Payment failure
			console.log('Payment failed: ', e);
			setIsPaymentProcessing(false);
			setPaymentResult({ success: false, message: e });
		}
	};

	const onPaymentStatusConfirm = () => {
		if (paymentResult.success) {
			clearCart();
		}
		setPaymentResult(null);
	};

	if (!cartItems.length || !restaurant) return <EmptyCartScreen />;

	return (
		<SafeAreaContainer>
			{isPaymentProcessing && (
				<Overlay>
					<ActivityIndicator size={100} />
				</Overlay>
			)}
			{paymentResult && (
				<Overlay>
					<FeedbackContainer>
						<Symbol
							icon={paymentResult.success ? 'check-decagram' : 'alert-octagon'}
							size={90}
							success={paymentResult.success}
						/>
						<Text>{paymentResult.message}</Text>
						<ConfirmButton success={paymentResult.success} onPress={onPaymentStatusConfirm}>
							OK
						</ConfirmButton>
					</FeedbackContainer>
				</Overlay>
			)}
			<ScrollView>
				<CartView cart={cart} clearCart={clearCart} />
				<PaymentView onPay={makePayment} />
			</ScrollView>
		</SafeAreaContainer>
	);
};

export default CheckoutScreen;
