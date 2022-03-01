import React, { useContext } from 'react';
import { ScrollView, Pressable, Text } from 'react-native';

import { FavouritesContainer } from './favouritesBar-styles';

import CompactRestaurantCard from '../compactRestaurantCard/compactRestaurantCard-comp';
import FadeInView from '../animations/fade';

import { FavouritesContext } from '../../services/favourites/favourites-context';

const FavouritesBar = ({ onNavigate, hidden }) => {
	const { favourites } = useContext(FavouritesContext);

	if (hidden) return null;

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
