import React from 'react';
import { FlatList, Pressable, Text } from 'react-native';

import RestaurantCard from '../restaurantCard/restaurantCard-comp';
import FadeInView from '../animations/fade';

const RestaurantsList = ({ restaurants, error, onNavigate }) => {
	if (error) return <Text>{error}</Text>;

	return (
		<FlatList
			data={restaurants}
			renderItem={({ item }) => (
				<FadeInView duration={1000}>
					<Pressable onPress={() => onNavigate('RestaurantDetails', { restaurant: item })}>
						<RestaurantCard restaurant={item} />
					</Pressable>
				</FadeInView>
			)}
			keyExtractor={item => item.name}
		/>
	);
};

export default RestaurantsList;
