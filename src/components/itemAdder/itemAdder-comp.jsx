import React, { useState, useEffect, useContext } from 'react';

import { Text } from '../utilities';
import { ItemAdderContainer, ChangeQtyBtn } from './itemAdder-styles';

import { CartContext } from '../../services/checkout/cart-context';

const ItemAdder = ({ restaurant, item }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const [ quantity, setQuantity ] = useState(0);

    useEffect(() => {
        if (!cart.restaurant) return;
        if (restaurant.placeId !== cart.restaurant.placeId) return;
        
        const itemInCart = cart.cartItems.find(cartItem => cartItem.id === item.id);
        itemInCart ? setQuantity(itemInCart.quantity) : setQuantity(0);
    }, [ cart ])

    const handleAdd = () => addToCart(restaurant, item);
    const handleRemove = () => removeFromCart(item);

	return (
		<ItemAdderContainer>
            {quantity ? (
                <>
                    <ChangeQtyBtn icon="minus" onPress={handleRemove} />
                    <Text>{quantity}</Text>
                    <ChangeQtyBtn icon="plus" onPress={handleAdd} />
                </>
            ) : (
                <ChangeQtyBtn icon="plus" onPress={handleAdd} />
            )}
		</ItemAdderContainer>
	);
};

export default ItemAdder;
