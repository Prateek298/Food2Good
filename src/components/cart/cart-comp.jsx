import React from 'react';
import { ScrollView } from 'react-native';

import { CartContainer, SectionHeading, Total, ClearButton } from './cart-styles';

import RestaurantCard from '../restaurantCard/restaurantCard-comp';
import MenuItem from '../menuItem/menuItem-comp';

const Cart = ({ cart, clearCart }) => {
	const { restaurant, cartItems, total } = cart;

	return (
		<CartContainer>
			<SectionHeading>Your Order</SectionHeading>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView nestedScrollEnabled>
				{cartItems.map(cartItem => <MenuItem key={cartItem.id} restaurant={restaurant} item={cartItem} />)}
			</ScrollView>
			<Total>Total: &#8377;{Math.round(total * 100) / 100}</Total>
			<ClearButton onPress={() => clearCart()}>Clear Cart</ClearButton>
		</CartContainer>
	);
};

export default Cart;
