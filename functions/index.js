const functions = require('firebase-functions');

const { geocodeRequest } = require('./geocode');
const { placesRequest } = require('./places');

exports.geocode = functions.https.onRequest((req, res) => {
	geocodeRequest(req, res);
});

exports.placesNearBy = functions.https.onRequest((req, res) => {
	placesRequest(req, res);
});
