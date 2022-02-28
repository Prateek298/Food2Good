import React, { useContext } from 'react';

import { ListContainer } from './restaurantsScreen-styles';

import RestaurantsList from '../../components/restaurantsList/restaurantsList-comp';

import { FavouritesContext } from '../../services/favourites/favourites-context';

const FavouriteRestaurants = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);

	return (
		<ListContainer>
			<RestaurantsList restaurants={favourites} onNavigate={navigation.navigate} />
		</ListContainer>
	);
};

export default FavouriteRestaurants;
