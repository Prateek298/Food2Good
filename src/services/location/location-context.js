import { createContext, useState } from 'react';

import { requestLocations, transformLocationsData } from './location-service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [ location, setLocation ] = useState(null);
	// const [ isLoading, setIsLoading ] = useState(false); -- currently not required
	const [ error, setError ] = useState(null);
	const [ searchKeyword, setSearchKeyword ] = useState('San Francisco');

	const getLocation = async searchTerm => {
		try {
			// do nothing if there is no search term
			if (!searchTerm.length) return;

			// setIsLoading(true);
			setSearchKeyword(searchTerm);
			const res = await requestLocations(searchTerm.toLowerCase());
			if (res.wasSuccess) {
				const transformedData = transformLocationsData(res.data);
				setLocation(transformedData);
			}
			else {
				// if no location coordinates are found corresponding to searchTerm
				setError(res.error);
				setLocation(null);
			}
			// setIsLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<LocationContext.Provider value={{ location, error, searchKeyword, search: getLocation }}>
			{children}
		</LocationContext.Provider>
	);
};
