import React from 'react';
import { FlatList, Pressable } from 'react-native';

import { Text } from '../utilities';
import { ErrorContainer, ErrorIcon } from './restaurantsList-styles';

import RestaurantCard from '../restaurantCard/restaurantCard-comp';
import FadeInView from '../animations/fade';

const RestaurantsList = ({ restaurants, error, onNavigate }) => {
	if (error)
		return (
			<ErrorContainer>
				<ErrorIcon />
				<Text weight="bold" color="error" font="body" size="title">
					{error}
				</Text>
			</ErrorContainer>
		);

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
