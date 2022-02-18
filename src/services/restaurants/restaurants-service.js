import camelize from 'camelize';

import { mocks, mockImages } from './mock';

export const requestRestaurants = location => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('Restaurants not found');
		}
		resolve(mock);
	});
};

export const transformRestaurantsData = ({ results }) => {
	const transformedResults = results.map(restaurant => {
		restaurant.photos = restaurant.photos.map(() => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]);

		return {
			...restaurant,
			address: restaurant.vicinity,
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
		};
	});

	return camelize(transformedResults);
};
