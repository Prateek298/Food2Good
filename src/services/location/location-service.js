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

export const getRegionInfoFromPin = async pin => {
	try {
		const res = await fetch(`http://www.postalpincode.in/api/pincode/${pin}`);
		const data = await res.json();
		if (data.Status === 'Success' && data.PostOffice.length) {
			return {
				localityNames: data.PostOffice.map(region => region.Name),
				districtName: data.PostOffice[0].District,
				stateName: data.PostOffice[0].State
			};
		}
		return {
			localityNames: [],
			districtName: '',
			stateName: ''
		};
	} catch (e) {
		console.log('Pin fetch fail ', e);
	}
};
