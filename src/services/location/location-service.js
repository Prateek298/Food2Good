import camelize from 'camelize';
import { hostUrl } from '../env';

export const requestLocations = async searchTerm => {
	try {
		const res = await fetch(`${hostUrl}/geocode?city=${searchTerm}`);
		const data = await res.json();
		return { wasSuccess: true, data };
	} catch (e) {
		console.log(e);
		return { wasSuccess: false, error: 'Location not found' };
	}
};

export const transformLocationsData = ({ results }) => {
	const { geometry } = camelize(results)[0];
	return {
		lat: geometry.location.lat,
		lng: geometry.location.lng,
		viewport: geometry.viewport
	};
};
