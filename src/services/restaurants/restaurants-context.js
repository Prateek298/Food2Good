import { useState, useEffect, createContext } from 'react';

import { requestRestaurants, transformRestaurantsData } from './restaurants-service';

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
	const [ restaurants, setRestaurants ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		const getRestaurants = () => {
			setIsLoading(true);
			setTimeout(async () => {
				try {
					const data = await requestRestaurants();
					const transformedData = transformRestaurantsData(data);
					setRestaurants(transformedData);
					setIsLoading(false);
				} catch (e) {
					setIsLoading(false);
					setError(e);
				}
			}, 2000);
		};
		getRestaurants();
	}, []);

	return (
		<RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantsContext.Provider>
	);
};
