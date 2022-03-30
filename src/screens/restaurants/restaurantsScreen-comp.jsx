import React, { useState, useEffect, useContext } from 'react';
import { Checkbox } from 'react-native-paper';

import { SafeAreaContainer, Text, LoadingSpinner } from '../../components/utilities';
import { ListContainer, ToggleFavourites } from './restaurantsScreen-styles';

import Search from '../../components/functionalities/search/search-comp';
import { FavouritesBar, RestaurantsList } from '../../components/restaurants';

import { LocationContext } from '../../services/location/location-context';
import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const RestaurantsScreen = ({ navigation }) => {
	const { searchKeyword, search } = useContext(LocationContext);
	const { restaurants, isLoading, error } = useContext(RestaurantsContext);
	const [ searchTerm, setSearchTerm ] = useState(searchKeyword);
	const [ showFavourites, setShowFavourites ] = useState(false);

	useEffect(
		() => {
			search(searchTerm);
		},
		[ searchTerm ]
	);

	if (isLoading) return <LoadingSpinner size={70} yPos="center" />;

	return (
		<SafeAreaContainer>
			<Search searchTermSetter={setSearchTerm} />
			<ToggleFavourites>
				<Text size="title">Show Favourites</Text>
				<Checkbox
					status={showFavourites ? 'checked' : 'unchecked'}
					onPress={() => setShowFavourites(!showFavourites)}
				/>
			</ToggleFavourites>
			<FavouritesBar hidden={!showFavourites} onNavigate={navigation.navigate} />
			<ListContainer>
				<RestaurantsList restaurants={restaurants} error={error} onNavigate={navigation.navigate} />
			</ListContainer>
		</SafeAreaContainer>
	);
};

export default RestaurantsScreen;
