import { createContext, useState, useEffect } from 'react';

import { requestLocations, transformLocationsData } from './location-service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [ location, setLocation ] = useState(null);
	// const [ isLoading, setIsLoading ] = useState(false); -- currently not required
	const [ error, setError ] = useState(null);

	const getLocation = async searchTerm => {
		try {
			// do nothing if there is no search term
			if (!searchTerm.length) return;

			// setIsLoading(true);
			const data = await requestLocations(searchTerm.toLowerCase());
			const transformedData = transformLocationsData(data);
			setLocation(transformedData);
			// setIsLoading(false);
		} catch (e) {
			// if no location coordinates are found corresponding to searchTerm
			setError(e);
			setLocation(null);
			// setIsLoading(false);
		}
	};

	return (
		<LocationContext.Provider value={{ location, error, search: getLocation }}>{children}</LocationContext.Provider>
	);
};
