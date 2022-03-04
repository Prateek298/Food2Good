import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../firebase/auth/auth-context';

export const UserSavesContext = createContext();

export const UserSavesContextProvider = ({ children }) => {
	const [ favourites, setFavourites ] = useState([]);
	const [ addresses, setAddresses ] = useState([]);
	const { user } = useContext(AuthContext);

	const addToFavourites = restaurant => setFavourites([ ...favourites, restaurant ]);

	const removeFromFavourites = restaurant => {
		const filteredFavourites = favourites.filter(x => x.placeId !== restaurant.placeId);
		setFavourites(filteredFavourites);
	};

	const addAddress = address => {
		// if it is the first address in the list, make it default
		address.id = `${address.pin}-${address.houseNo}`;
		address.isDefault = addresses.length ? false : true;
		setAddresses([ ...addresses, address ]);
	};

	const removeAddress = address => {
		const filteredAddresses = addresses.filter(x => x.id !== address.id);
		if (filteredAddresses.length === 1) filteredAddresses[0].isDefault = true;
		setAddresses(filteredAddresses);
	};

	const makeAddressDefault = address => {
		setAddresses(
			addresses.map(x => {
				if (x.id === address.id) x.isDefault = true;
				else x.isDefault = false;
				return x;
			})
		);
	};

	const modifyAddress = address => {
		setAddresses(addresses.map(x => (x.id === address.id ? { ...x, ...address } : x)));
	};

	useEffect(() => {
		const loadFavourites = async () => {
			try {
				const res = await AsyncStorage.getItem(`favourites-${user.uid}`);
				if (res !== null) setFavourites(JSON.parse(res));
			} catch (e) {
				console.log('loading favourites error', e);
			}
		};
		const loadAddresses = async () => {
			try {
				const res = await AsyncStorage.getItem(`addresses-${user.uid}`);
				if (res !== null) setAddresses(JSON.parse(res));
			} catch (e) {
				console.log('loading addresses error', e);
			}
		};
		loadFavourites();
		loadAddresses();
	}, []);

	useEffect(
		() => {
			const saveFavourites = async () => {
				try {
					const jsonValue = JSON.stringify(favourites);
					// saving unique favourites for different users
					await AsyncStorage.setItem(`favourites-${user.uid}`, jsonValue);
				} catch (e) {
					console.log('Saving favourites error', e);
				}
			};
			saveFavourites();
		},
		[ favourites ]
	);

	useEffect(
		() => {
			const saveAddresses = async () => {
				try {
					const jsonValue = JSON.stringify(addresses);
					await AsyncStorage.setItem(`addresses-${user.uid}`, jsonValue);
				} catch (e) {
					console.log('Saving addresses error', e);
				}
			};
			saveAddresses();
		},
		[ addresses ]
	);

	return (
		<UserSavesContext.Provider
			value={{
				favourites,
				addToFavourites,
				removeFromFavourites,
				addresses,
				addAddress,
				removeAddress,
				modifyAddress,
				makeAddressDefault
			}}
		>
			{children}
		</UserSavesContext.Provider>
	);
};
