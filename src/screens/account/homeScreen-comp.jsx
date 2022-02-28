import React from 'react';
import LottieView from 'lottie-react-native';

import { BackgroundCover, AnimationContainer, ContentContainer, StyledButton } from './accountScreen-styles';

const HomeScreen = ({ navigation }) => (
	<BackgroundCover>
		<AnimationContainer>
			<LottieView
				key="animation"
				source={require('../../../assets/watermelon.json')}
				autoPlay
				loop
				resizeMode="cover"
			/>
		</AnimationContainer>
		<ContentContainer growByContent>
			<StyledButton mb icon="login" mode="contained" onPress={() => navigation.navigate('Login')}>
				Login
			</StyledButton>
			<StyledButton icon="account-plus" mode="contained" onPress={() => navigation.navigate('Register')}>
				Register
			</StyledButton>
		</ContentContainer>
	</BackgroundCover>
);

export default HomeScreen;
