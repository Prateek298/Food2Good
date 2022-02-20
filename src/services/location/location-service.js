import camelize from 'camelize';

import { locations } from './location-mock';

export const requestLocations = searchTerm => {
	return new Promise((resolve, reject) => {
		const locationMock = locations[searchTerm];
		if (!locationMock) {
			reject('Location not found');
		}
		resolve(locationMock);
	});
};

export const transformLocationsData = ({ results }) => {
	const { geometry } = camelize(results)[0];
	return {
		lat: geometry.location.lat,
		lng: geometry.location.lng,
		viewport: geometry.viewport
	};
};
