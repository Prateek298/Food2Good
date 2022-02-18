import React, { useState, useEffect, useContext } from 'react';
import { FlatList, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { SearchBarContainer, RestaurantsList, LoadingSpinner } from './restaurants-styles';
import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';

import { LocationContext } from '../../services/location/location-context';
import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const Restaurants = () => {
	const [ searchText, setSearchText ] = useState('');
	const [ searchTerm, setSearchTerm ] = useState('San Francisco'); // default value, so that restaurants are shown when app opens for first time
	const { search } = useContext(LocationContext);
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);

	useEffect(
		() => {
			search(searchTerm);
		},
		[ searchTerm ]
	);

	if (isLoading) return <LoadingSpinner size="large" color="#5282BD" />;

	return (
		<SafeAreaContainer>
			<SearchBarContainer>
				<Searchbar
					placeholder="Search"
					value={searchText}
					onChangeText={query => setSearchText(query)}
					onSubmitEditing={() => setSearchTerm(searchText)}
				/>
			</SearchBarContainer>
			<RestaurantsList>
				{error ? (
					<Text>{error}</Text>
				) : (
					<FlatList
						data={restaurants}
						renderItem={({ item }) => <RestaurantCard restaurant={item} />}
						keyExtractor={item => item.name}
					/>
				)}
			</RestaurantsList>
		</SafeAreaContainer>
	);
};

export default Restaurants;
