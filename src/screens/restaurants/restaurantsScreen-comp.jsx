import React, { useState, useEffect, useContext } from 'react';
import { FlatList, Text, Pressable } from 'react-native';

import { RestaurantsList, LoadingSpinner } from './restaurantsScreen-styles';
import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

import Search from '../../components/search/search-comp';
import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';

import { LocationContext } from '../../services/location/location-context';
import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const RestaurantsScreen = ({ navigation }) => {
	const { searchKeyword, search } = useContext(LocationContext);
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	const [ searchTerm, setSearchTerm ] = useState(searchKeyword);

	useEffect(
		() => {
			search(searchTerm);
		},
		[ searchTerm ]
	);

	if (isLoading) return <LoadingSpinner size="large" color="#5282BD" />;

	return (
		<SafeAreaContainer>
			<Search searchTermSetter={setSearchTerm} />
			<RestaurantsList>
				{error ? (
					<Text>{error}</Text>
				) : (
					<FlatList
						data={restaurants}
						renderItem={({ item }) => (
							<Pressable onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}>
								<RestaurantCard restaurant={item} />
							</Pressable>
						)}
						keyExtractor={item => item.name}
					/>
				)}
			</RestaurantsList>
		</SafeAreaContainer>
	);
};

export default RestaurantsScreen;
