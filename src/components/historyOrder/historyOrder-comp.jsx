import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Card } from 'react-native-paper';

import { Spacer, Text } from '../utilities';
import { Dropdown, Item, RowGroup } from './historyOrder-styles';

const formatDate = date => {
	const d = new Date(date);
	const result =
		d.getDate() +
		'/' +
		(d.getMonth() + 1) +
		'/' +
		d.getFullYear() +
		' ' +
		d.getHours() +
		':' +
		d.getMinutes() +
		':' +
		d.getSeconds();
	return result;
};

const HistoryOrder = ({ order, onNavigate }) => {
	const { id, restaurant, cartItems, total } = order;
	const [ expanded, setExpanded ] = useState(false);

	return (
		<Spacer variants="mb-2">
			<Card>
				<Spacer variants="p-3">
					<Text font="heading" weight="bold" size="title">
						{restaurant.name}
					</Text>
					<Text size="caption" color="secondary">
						{formatDate(id)}
					</Text>
					<Spacer variants="mt-2" />
					<Dropdown title="Items Ordered" expanded={expanded} onPress={() => setExpanded(!expanded)}>
						<Spacer variants="pl-3 pr-3">
							{cartItems.map(item => (
								<Item
									key={item.id}
									left={() => (
										<Text size="button">
											{item.name} ({item.quantity})
										</Text>
									)}
									right={() => <Text size="button">&#8377;{item.price * item.quantity}</Text>}
								/>
							))}
						</Spacer>
					</Dropdown>
					<Spacer variants="mb-2" />
					<RowGroup>
						<Text weight="bold">Total: </Text>
						<Text color="success" weight="bold">
							&#8377;{Math.round(total * 100) / 100}
						</Text>
					</RowGroup>
					<Spacer variants="mt-2" />
					<Pressable onPress={() => onNavigate('RestaurantDetails', { restaurant })}>
						<Text color="blue">Order from here again</Text>
					</Pressable>
				</Spacer>
			</Card>
		</Spacer>
	);
};

export default HistoryOrder;
