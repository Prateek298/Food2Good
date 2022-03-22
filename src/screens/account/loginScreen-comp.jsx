import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { BackgroundCover, ContentContainer, StyledTextInput, StyledButton } from './accountScreen-styles';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const LoginScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const { onLogin, isLoading } = useContext(AuthContext);

	return (
		<BackgroundCover>
			<ContentContainer>
				<StyledTextInput
					mb
					mode="outlined"
					label="Email"
					value={email}
					onChangeText={text => setEmail(text)}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<StyledTextInput
					mb
					mode="outlined"
					label="Password"
					value={password}
					onChangeText={pass => setPassword(pass)}
					autoCapitalize="none"
					secureTextEntry
				/>
				{isLoading ? (
					<ActivityIndicator size="small" color="purple" />
				) : (
					<StyledButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email, password)}>
						Login
					</StyledButton>
				)}
			</ContentContainer>
		</BackgroundCover>
	);
};

export default LoginScreen;
