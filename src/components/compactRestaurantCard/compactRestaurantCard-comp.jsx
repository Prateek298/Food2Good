import React from 'react';
import { Platform } from 'react-native';

import { CompactContainer, ImageNative, ImageWebView, Name } from './compactRestaurantCard-styles';

const CompactRestaurantCard = ({ restaurant, isMapCallout }) => {
	// Android doesn't support Image in Callout, so we render a WebView
	const Image = isMapCallout && Platform.OS === 'android' ? ImageWebView : ImageNative;

	return (
		<CompactContainer>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Name>{restaurant.name}</Name>
		</CompactContainer>
	);
};

export default CompactRestaurantCard;
