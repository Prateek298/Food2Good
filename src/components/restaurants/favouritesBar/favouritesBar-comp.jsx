import React, { useContext } from 'react';
import { ScrollView, Pressable } from 'react-native';

import { FavouritesContainer } from './favouritesBar-styles';
import { Text, Spacer } from '../../utilities';

import CompactRestaurantCard from '../compactRestaurantCard/compactRestaurantCard-comp';
import FadeInView from '../../animations/fade';

import { UserSavesContext } from '../../../services/userSaves/userSaves-context';

const FavouritesBar = ({ onNavigate, hidden }) => {
	const { favourites } = useContext(UserSavesContext);

	if (hidden) return null;
	if (!favourites.length) {
		return (
			<Spacer variants="ml-2">
				<Text>No favourites added yet!</Text>
			</Spacer>
		);
	}

	return (
		<FadeInView duration={800}>
			<FavouritesContainer>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{favourites.map(restaurant => (
						<Pressable
							key={restaurant.name}
							onPress={() => onNavigate('RestaurantDetails', { restaurant })}
						>
							<CompactRestaurantCard restaurant={restaurant} />
						</Pressable>
					))}
				</ScrollView>
			</FavouritesContainer>
		</FadeInView>
	);
};

export default FavouritesBar;
