const functions = require('firebase-functions');
const stripeClient = require('stripe')(functions.config().stripe.key);

const { geocodeRequest } = require('./geocode');
const { placesRequest } = require('./places');
const { paymentRequest } = require('./payment');

exports.geocode = functions.https.onRequest((req, res) => {
	geocodeRequest(req, res);
});

exports.placesNearBy = functions.https.onRequest((req, res) => {
	placesRequest(req, res);
});

exports.payment = functions.https.onRequest((req, res) => {
	paymentRequest(req, res, stripeClient);
});
