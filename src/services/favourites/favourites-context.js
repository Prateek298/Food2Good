import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
	const [ favourites, setFavourites ] = useState([]);

	const add = restaurant => setFavourites([ ...favourites, restaurant ]);

	const remove = restaurant => {
		const filteredFavourites = favourites.filter(x => x.placeId !== restaurant.placeId);
		setFavourites(filteredFavourites);
	};

	useEffect(() => {
		const loadFavourites = async () => {
			try {
				const faves = await AsyncStorage.getItem('favourites');
				if (faves !== null) setFavourites(JSON.parse(faves));
			} catch (e) {
				console.log('loading favourites error', e);
			}
		};
		loadFavourites();
	}, []);

	useEffect(
		() => {
			const saveFavourites = async () => {
				try {
					const jsonValue = JSON.stringify(favourites);
					await AsyncStorage.setItem('favourites', jsonValue);
				} catch (e) {
					console.log('Saving favourites error', e);
				}
			};
			saveFavourites();
		},
		[ favourites ]
	);

	return (
		<FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
			{children}
		</FavouritesContext.Provider>
	);
};
