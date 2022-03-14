import React from 'react';
import { Text } from 'react-native';

import { EmptyCartContainer, EmptyIcon } from './checkout-styles';

const EmptyCartScreen = () => (
	<EmptyCartContainer>
		<Text>Fill the cart with your favourites</Text>
		<EmptyIcon />
		<Text>Let us handle the delivering</Text>
	</EmptyCartContainer>
);

export default EmptyCartScreen;
