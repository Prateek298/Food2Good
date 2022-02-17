import camelize from 'camelize';

import { mocks, mockImages } from './mock';

export const requestRestaurants = (location = '37.7749295,-122.4194155') => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('Not found');
		}
		resolve(mock);
	});
};

export const transformRestaurantsData = ({ results }) => {
	const transformedResults = results.map(restaurant => {
		restaurant.photos = restaurant.photos.map(() => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]);

		return {
			...restaurant,
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
		};
	});

	return camelize(transformedResults);
};
