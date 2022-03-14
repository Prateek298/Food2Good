module.exports.paymentRequest = async (req, res, stripeClient) => {
	try {
		const { token, amount } = JSON.parse(req.body);
		const paymentIntent = await stripeClient.paymentIntents.create({
			amount: Math.ceil(amount) * 100,
			currency: 'inr',
			payment_method_types: [ 'card' ],
			payment_method_data: {
				type: 'card',
				card: { token }
			},
			confirm: true
		});
		res.status(200).json(paymentIntent);
	} catch (e) {
		res.status(400).json({ error: e });
	}
};
