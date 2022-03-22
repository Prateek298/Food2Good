import React, { useContext } from 'react';

import { ContentCenterContainer, Text, SymbolIcon, Spacer } from '../../components/utilities';
import { ListContainer } from './restaurantsScreen-styles';

import RestaurantsList from '../../components/restaurantsList/restaurantsList-comp';

import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const FavouriteRestaurants = ({ navigation }) => {
	const { favourites } = useContext(UserSavesContext);

	if (!favourites.length)
		return (
			<ContentCenterContainer>
				<Text>No favourites added yet...</Text>
				<Spacer variants="mb-2 mt-2">
					<SymbolIcon icon="pin-off" size={128} />
				</Spacer>
				<Text>Pick from restaurants around your area</Text>
			</ContentCenterContainer>
		);

	return (
		<ListContainer>
			<RestaurantsList restaurants={favourites} onNavigate={navigation.navigate} />
		</ListContainer>
	);
};

export default FavouriteRestaurants;
