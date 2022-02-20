import { useState, useEffect, createContext, useContext } from 'react';

import { requestRestaurants, transformRestaurantsData } from './restaurants-service';
import { LocationContext } from '../location/location-context';

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	const { location, error: locationError } = useContext(LocationContext);

	useEffect(
		() => {
			const getRestaurants = () => {
				setIsLoading(true);
				setTimeout(async () => {
					try {
						// if location coordinates are received
						if (location && location.lat && location.lng) {
							setError(null); // resets the error
							const { lat, lng } = location;
							const data = await requestRestaurants(`${lat},${lng}`);
							const transformedData = transformRestaurantsData(data);
							setRestaurants(transformedData);
						}
						else {
							// location is null due to search place not being mapped to coordinates, so pass the error
							setRestaurants([]);
							setError(locationError);
						}
						setIsLoading(false);
					} catch (e) {
						setIsLoading(false);
						setError(e);
					}
				}, 2000);
			};
			getRestaurants();
		},
		[ location ]
	);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>
	);
};
