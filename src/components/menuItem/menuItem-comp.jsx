import React from 'react';
import { View } from 'react-native';

import { Item, DishName, Price } from './menuItem-styles';

import ItemAdder from '../itemAdder/itemAdder-comp';

const MenuItem = ({ restaurant, item }) => {
	return (
		<Item
			left={() => (
				<View>
					<DishName>{item.name}</DishName>
					<Price>&#8377;{item.price}</Price>
				</View>
			)}
			right={() => <ItemAdder restaurant={restaurant} item={item} />}
		/>
	);
};

export default MenuItem;
