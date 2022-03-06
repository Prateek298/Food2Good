const { locations: locationsMock } = require('./location-mock');

module.exports.geocodeRequest = (req, res) => {
	const { city } = req.query;
	const locationGeocode = locationsMock[city.toLowerCase()];
	res.json(locationGeocode);
};
