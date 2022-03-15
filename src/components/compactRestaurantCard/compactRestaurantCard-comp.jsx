import React from 'react';
import { Platform } from 'react-native';

import { Text, Spacer } from '../utilities';
import { CompactContainer, ImageNative, ImageWebView } from './compactRestaurantCard-styles';

const CompactRestaurantCard = ({ restaurant, isMapCallout }) => {
	// Android doesn't support Image in Callout, so we render a WebView
	const Image = isMapCallout && Platform.OS === 'android' ? ImageWebView : ImageNative;

	return (
		<CompactContainer>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Spacer variants="mt-2" />
			<Text size="button" font="heading">
				{restaurant.name}
			</Text>
		</CompactContainer>
	);
};

export default CompactRestaurantCard;
