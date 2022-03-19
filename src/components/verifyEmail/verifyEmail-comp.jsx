import React, { useContext } from 'react';
import { Alert } from 'react-native';

import { Text, Spacer } from '../utilities';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const VerifyEmail = ({ screen }) => {
	const { user, verifyEmail, reloadUserData } = useContext(AuthContext);

	const createFeedbackAlert = () =>
		Alert.alert(
			'Email sent!',
			`An email with verification link has been sent to ${user.email}
Verify, then restart the app or click 'OK' to notice the changes.`,
			[ { text: 'OK', onPress: reloadUserData } ]
		);

	if (user.emailVerified) return null;

	if (screen === 'checkout')
		return (
			<Spacer variants="p-2">
				<Text weight="bold" color="error">
					Verify your email first (<Text
						color="blue"
						onPress={() => {
							verifyEmail();
							createFeedbackAlert();
						}}
					>
						Click here
					</Text>)
				</Text>
			</Spacer>
		);

	return (
		<Text
			size="button"
			color="blue"
			onPress={() => {
				verifyEmail();
				createFeedbackAlert();
			}}
		>
			Click here to receive verification link
		</Text>
	);
};

export default VerifyEmail;
