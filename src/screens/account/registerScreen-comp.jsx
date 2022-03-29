import React, { useState, useContext } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';

import { BackgroundCover, ContentContainer, StyledButton } from './accountScreen-styles';
import { Spacer } from '../../components/utilities';

import TextInputWithFeedback from '../../components/textInputWithFeedback/textInputWithFeedback-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';

import { validateEmailSyntax, checkPasswordStrength, checkPasswordConfirm } from '../../utils/form-validations';

const RegisterScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ inputFieldsStatus, setInputFieldsStatus ] = useState({
		email: false,
		password: false,
		confirmPassword: false
	});
	const { onRegister, isLoading } = useContext(AuthContext);

	const changeStatus = field => newStatus => setInputFieldsStatus({ ...inputFieldsStatus, [field]: newStatus });

	const handleSubmit = () => {
		Keyboard.dismiss();
		// check whether all the field that need to be validated are ok or not
		if (!Object.keys(inputFieldsStatus).includes(false)) {
			onRegister(email, password, confirmPassword);
		}
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
					validatorFn={() => checkPasswordStrength(password)}
					onStatusChange={changeStatus('password')}
					label="Password"
					value={password}
					onChangeText={pass => setPassword(pass)}
					autoCapitalize="none"
					secureTextEntry
				/>
				<Spacer variants="mb-2" />
				<TextInputWithFeedback
					validatorFn={() => checkPasswordConfirm(password, confirmPassword)}
					onStatusChange={changeStatus('confirmPassword')}
					label="Confirm Password"
					value={confirmPassword}
					onChangeText={pass => setConfirmPassword(pass)}
					autoCapitalize="none"
					secureTextEntry
				/>
				<Spacer variants="mb-2" />
				{isLoading ? (
					<ActivityIndicator size="small" color="purple" />
				) : (
					<StyledButton icon="lock-open-outline" mode="contained" onPress={handleSubmit}>
						Register
					</StyledButton>
				)}
			</ContentContainer>
		</BackgroundCover>
	);
};

export default RegisterScreen;
