import React, { useState, useEffect, useContext } from 'react';
import { Switch } from 'react-native-paper';

import { SafeAreaContainer, Text, LoadingSpinner, Spacer } from '../../components/utilities';
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
				<Switch
					value={showFavourites}
					onValueChange={() => setShowFavourites(!showFavourites)}
					color="tomato"
				/>
				<Spacer variants="pr-1" />
				<Text size="title" font="body2">
					Favourites
				</Text>
			</ToggleFavourites>
			<FavouritesBar hidden={!showFavourites} onNavigate={navigation.navigate} />
			<ListContainer>
				<RestaurantsList restaurants={restaurants} error={error} onNavigate={navigation.navigate} />
			</ListContainer>
		</SafeAreaContainer>
	);
};

export default RestaurantsScreen;
