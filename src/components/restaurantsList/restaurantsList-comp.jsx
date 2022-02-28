import React from 'react';
import { FlatList, Pressable, Text } from 'react-native';

import RestaurantCard from '../restaurantCard/restaurantCard-comp';

const RestaurantsList = ({ restaurants, error, onNavigate }) => {
	if (error) return <Text>{error}</Text>;

	return (
		<FlatList
			data={restaurants}
			renderItem={({ item }) => (
				<Pressable onPress={() => onNavigate('RestaurantDetails', { restaurant: item })}>
					<RestaurantCard restaurant={item} />
				</Pressable>
			)}
			keyExtractor={item => item.name}
		/>
	);
};

export default RestaurantsList;
