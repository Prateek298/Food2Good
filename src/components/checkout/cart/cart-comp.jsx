import React from 'react';
import { ScrollView } from 'react-native';

import { Text, Spacer } from '../../utilities';
import { CartContainer, ClearButton } from './cart-styles';

import { RestaurantCard, MenuItem } from '../../restaurants';

const Cart = ({ cart, clearCart }) => {
	const { restaurant, cartItems, total } = cart;

	return (
		<CartContainer>
			<Spacer variants="m-2">
				<Text size="title" weight="bold">
					Your Order
				</Text>
			</Spacer>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView nestedScrollEnabled>
				{cartItems.map(cartItem => <MenuItem key={cartItem.id} restaurant={restaurant} item={cartItem} />)}
			</ScrollView>
			<Spacer variants="pl-2 mt-2">
				<Text weight="bold">Total: &#8377;{Math.round(total * 100) / 100}</Text>
			</Spacer>
			<ClearButton onPress={() => clearCart()}>Clear Cart</ClearButton>
		</CartContainer>
	);
};

export default Cart;
