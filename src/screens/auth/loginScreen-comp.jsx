import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';

import { BackgroundCover, ContentContainer, StyledButton } from './authScreens-styles';
import { Spacer, Text, TextInputWithFeedback } from '../../components/utilities';

import { AuthContext } from '../../services/firebase/auth/auth-context';

import { validateEmailSyntax, requiredField } from '../../utils/form-validations';

const LoginScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ inputFieldsStatus, setInputFieldsStatus ] = useState({
		email: false,
		password: false
	});
	const { onLogin, onForgetPassword, isLoading } = useContext(AuthContext);

	const changeStatus = field => newStatus => setInputFieldsStatus({ ...inputFieldsStatus, [field]: newStatus });

	const handleForget = async () => {
		try {
			if (!inputFieldsStatus['email']) return;

			await onForgetPassword(email);
			return Alert.alert('Mail Sent', `Check the mail sent to ${email} to reset your password`, [
				{ text: 'OK' }
			]);
		} catch (e) {
			console.log(e);
		}
	};

	const handleSubmit = () => {
		Keyboard.dismiss();
		// check whether all the field that need to be validated are ok or not
		if (Object.values(inputFieldsStatus).includes(false)) return;
		onLogin(email, password);
	};

	return (
		<BackgroundCover>
			<ContentContainer>
				<TextInputWithFeedback
					validatorFn={() => validateEmailSyntax(email)}
					onStatusChange={changeStatus('email')}
					label="Email"
					value={email}
					onChangeText={text => setEmail(text)}
					autoCapitalize="none"
					keyboardType="email-address"
				/>
				<Spacer variants="mb-2" />
				<TextInputWithFeedback
					validatorFn={() => requiredField(password)}
					onStatusChange={changeStatus('password')}
					label="Password"
					value={password}
					onChangeText={pass => setPassword(pass)}
					autoCapitalize="none"
					secureTextEntry
				/>
				<Spacer variants="mb-1" />
				<Text size="button" color={inputFieldsStatus['email'] ? 'blue' : 'disabled'} onPress={handleForget}>
					Forgot Password ? {!inputFieldsStatus['email'] && '(Enter email first)'}
				</Text>
				<Spacer variants="mb-3" />
				{isLoading ? (
					<ActivityIndicator size="small" color="purple" />
				) : (
					<StyledButton icon="lock-open-outline" mode="contained" onPress={handleSubmit}>
						Login
					</StyledButton>
				)}
			</ContentContainer>
		</BackgroundCover>
	);
};

export default LoginScreen;
