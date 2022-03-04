import React, { useContext } from 'react';

import { ListContainer } from './restaurantsScreen-styles';

import RestaurantsList from '../../components/restaurantsList/restaurantsList-comp';

import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const FavouriteRestaurants = ({ navigation }) => {
	const { favourites } = useContext(UserSavesContext);

	return (
		<ListContainer>
			<RestaurantsList restaurants={favourites} onNavigate={navigation.navigate} />
		</ListContainer>
	);
};

export default FavouriteRestaurants;
