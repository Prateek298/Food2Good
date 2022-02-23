import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { FavouritesButton } from './favouritesIcon-styles';

import { FavouritesContext } from '../../services/favourites/favourites-context';

const FavouritesIcon = ({ restaurant }) => {
	const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

	const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);

	const handlePress = () => (isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant));

	return (
		<FavouritesButton onPress={handlePress}>
			<AntDesign name={isFavourite ? 'heart' : 'hearto'} size={24} color={isFavourite ? 'red' : 'white'} />
		</FavouritesButton>
	);
};

export default FavouritesIcon;
