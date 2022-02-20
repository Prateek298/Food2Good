import React from 'react';
import { Text, Platform } from 'react-native';

import { CalloutContainer, ImageNative, ImageWebView } from './mapMarkerCallout-styles';

const MapMarkerCallout = ({ restaurant }) => {
	// Android doesn't support Image in Callout, so we render a WebView
	const Image = Platform.OS === 'android' ? ImageWebView : ImageNative;

	return (
		<CalloutContainer>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Text>{restaurant.name}</Text>
		</CalloutContainer>
	);
};

export default MapMarkerCallout;
