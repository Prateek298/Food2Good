import React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

import { Text, Spacer } from '../../utilities';

import ItemAdder from '../../functionalities/itemAdder/itemAdder-comp';

const DishInfo = styled.View`width: 70%;`;

const MenuItem = ({ restaurant, item }) => {
	return (
		<List.Item
			left={() => (
				<DishInfo>
					<Text font="body2">{item.name}</Text>
					<Spacer variants="mb-1" />
					<Text size="caption" color="secondary" font="body2">
						&#8377;{item.price}
					</Text>
				</DishInfo>
			)}
			right={() => <ItemAdder restaurant={restaurant} item={item} />}
		/>
	);
};

export default MenuItem;
