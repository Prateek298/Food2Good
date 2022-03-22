import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { BackgroundCover, ContentContainer, StyledTextInput, StyledButton } from './accountScreen-styles';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const RegisterScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const { onRegister, isLoading } = useContext(AuthContext);

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
				<StyledTextInput
					mb
					mode="outlined"
					label="Confirm Password"
					value={confirmPassword}
					onChangeText={pass => setConfirmPassword(pass)}
					autoCapitalize="none"
					secureTextEntry
				/>
				{isLoading ? (
					<ActivityIndicator size="small" color="purple" />
				) : (
					<StyledButton
						icon="lock-open-outline"
						mode="contained"
						onPress={() => onRegister(email, password, confirmPassword)}
					>
						Register
					</StyledButton>
				)}
			</ContentContainer>
		</BackgroundCover>
	);
};

export default RegisterScreen;
