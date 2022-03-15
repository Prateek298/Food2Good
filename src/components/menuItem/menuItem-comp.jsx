import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

import { Text, Spacer } from '../utilities';

import ItemAdder from '../itemAdder/itemAdder-comp';

const MenuItem = ({ restaurant, item }) => {
	return (
		<List.Item
			left={() => (
				<View>
					<Text>{item.name}</Text>
					<Spacer variants="mb-1" />
					<Text size="caption" color="secondary">
						&#8377;{item.price}
					</Text>
				</View>
			)}
			right={() => <ItemAdder restaurant={restaurant} item={item} />}
		/>
	);
};

export default MenuItem;
