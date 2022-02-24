import React from 'react';

import { BackgroundCover, ContentContainer, StyledButton } from './accountScreen-styles';

const HomeScreen = ({ navigation }) => (
	<BackgroundCover>
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
