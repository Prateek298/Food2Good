import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { SearchBarContainer, RestaurantsList, LoadingSpinner } from './restaurants-styles';
import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';

import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const Restaurants = () => {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);

	if (error) console.log(error);

	if (isLoading) return <LoadingSpinner size="large" color="#5282BD" />;

	return (
		<SafeAreaContainer>
			<SearchBarContainer>
				<Searchbar placeholder="Search" />
			</SearchBarContainer>
			<RestaurantsList>
				<FlatList
					data={restaurants}
					renderItem={({ item }) => <RestaurantCard restaurant={item} />}
					keyExtractor={item => item.name}
				/>
			</RestaurantsList>
		</SafeAreaContainer>
	);
};

export default Restaurants;
