import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { Portal, Provider, ActivityIndicator } from 'react-native-paper';

import { SafeAreaContainer, ContentCenterContainer, Text, SymbolIcon, Spacer } from '../../components/utilities';
import { ProcessingDialog, PaymentFeedbackDialog, ConfirmButton } from './checkout-styles';

import { Cart as CartView, Payment as PaymentView } from '../../components/checkout';

import { CartContext } from '../../services/checkout/cart-context';
import { UserSavesContext } from '../../services/userSaves/userSaves-context';
import { cardTokenRequest, payRequest } from '../../services/checkout/checkout-service';

const CheckoutScreen = () => {
	const { cart, clearCart } = useContext(CartContext);
	const { cartItems, restaurant, total } = cart;
	const { addOrderToHistory } = useContext(UserSavesContext);
	const [ isPaymentProcessing, setIsPaymentProcessing ] = useState(false);
	const [ paymentResult, setPaymentResult ] = useState(false);

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
			addOrderToHistory(cart);
			clearCart();
		}
		setPaymentResult(null);
	};

	if (!cartItems.length || !restaurant)
		return (
			<ContentCenterContainer>
				<Text>Fill the cart with your favourites</Text>
				<Spacer variants="mt-2 mb-2">
					<SymbolIcon icon="cart-off" size={128} />
				</Spacer>
				<Text>Let us handle the delivering</Text>
			</ContentCenterContainer>
		);

	return (
		<Provider>
			<SafeAreaContainer>
				<ScrollView>
					<CartView cart={cart} clearCart={clearCart} />
					<PaymentView onPay={makePayment} />
				</ScrollView>
				<Portal>
					<ProcessingDialog visible={isPaymentProcessing} dismissable={false}>
						<ActivityIndicator size={100} />
					</ProcessingDialog>

					<PaymentFeedbackDialog visible={paymentResult} dismissable={false}>
						<SymbolIcon
							icon={paymentResult.success ? 'check-decagram' : 'alert-octagon'}
							size={90}
							bg={paymentResult.success ? 'success' : 'error'}
						/>
						<Text font="body">{paymentResult.message}</Text>
						<ConfirmButton success={paymentResult.success} onPress={onPaymentStatusConfirm}>
							OK
						</ConfirmButton>
					</PaymentFeedbackDialog>
				</Portal>
			</SafeAreaContainer>
		</Provider>
	);
};

export default CheckoutScreen;
