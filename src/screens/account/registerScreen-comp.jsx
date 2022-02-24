import React, { useState } from 'react';

import { BackgroundCover, ContentContainer, StyledTextInput, StyledButton } from './accountScreen-styles';

const RegisterScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

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
				<StyledButton icon="lock-open-outline" mode="contained">
					Register
				</StyledButton>
			</ContentContainer>
		</BackgroundCover>
	);
};

export default RegisterScreen;
