import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const FadeInView = ({ duration = 1500, children }) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(
		() => {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration,
				useNativeDriver: true
			}).start();
		},
		[ fadeAnim ]
	);

	return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};

export default FadeInView;
