import camelize from 'camelize';
import { hostUrl } from '../env';

export const requestRestaurants = location => {
	return fetch(`${hostUrl}/placesNearBy?location=${location}`)
		.then(res => res.json())
		.catch(e => console.log('reqRes', e));
};

export const transformRestaurantsData = ({ results = [] }) => {
	const transformedResults = results.map(restaurant => ({
		...restaurant,
		address: restaurant.vicinity,
		isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
		isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
	}));

	return camelize(transformedResults);
};
