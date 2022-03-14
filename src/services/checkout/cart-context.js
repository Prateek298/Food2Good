import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../firebase/auth/auth-context';

export const CartContext = createContext();

const INITIAL_STATE = {
	restaurant: null,
	cartItems: [],
	total: 0
};

export const CartContextProvider = ({ children }) => {
	const [ cart, setCart ] = useState(INITIAL_STATE);
	const { user } = useContext(AuthContext);

	useEffect(
		() => {
			const loadCart = async () => {
				try {
					const savedCart = await AsyncStorage.getItem(`cart-${user.uid}`);
					if (savedCart !== null) setCart(JSON.parse(savedCart));
				} catch (e) {
					console.error('Cart loading error', e);
				}
			};
			loadCart();
		},
		[ user ]
	);

	useEffect(
		() => {
			const saveCart = async () => {
				try {
					const jsonCart = JSON.stringify(cart);
					await AsyncStorage.setItem(`cart-${user.uid}`, jsonCart);
				} catch (e) {
					console.error('Error while saving cart', e);
				}
			};
			saveCart();
		},
		[ cart ]
	);

	const addToCart = (rst, item) => {
		// if item is from same restaurant as previous items, then append the item
		if (cart.restaurant && rst.placeId === cart.restaurant.placeId) {
			const existingItem = cart.cartItems.find(cartItem => cartItem.id === item.id);
			if (existingItem) {
				const newCartItems = cart.cartItems.map(
					cartItem => (item.id === cartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
				);
				return setCart({ ...cart, cartItems: newCartItems, total: cart.total + item.price });
			}
			return setCart({
				...cart,
				cartItems: [ ...cart.cartItems, { ...item, quantity: 1 } ],
				total: cart.total + item.price
			});
		}
		else {
			// else reset the cart and then add the item for new restaurant
			clearCart();
			setCart({ restaurant: rst, cartItems: [ { ...item, quantity: 1 } ], total: item.price });
		}
	};

	const removeFromCart = item => {
		const existingItem = cart.cartItems.find(cartItem => cartItem.id === item.id);
		if (!existingItem) return;

		if (existingItem.quantity === 1) {
			// remove item from the cart
			const newCartItems = cart.cartItems.filter(cartItem => cartItem.id !== item.id);
			return setCart({ ...cart, cartItems: newCartItems, total: cart.total - item.price });
		}

		const newCartItems = cart.cartItems.map(
			cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
		);
		setCart({ ...cart, cartItems: newCartItems, total: cart.total - item.price });
	};

	const clearCart = () => setCart(INITIAL_STATE);

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
	);
};
