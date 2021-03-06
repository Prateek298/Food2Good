import React, { useContext, Fragment } from 'react';
import { List } from 'react-native-paper';

import { Text, Spacer, LoadingSpinner } from '../../components/utilities';
import { Header, SettingOptionsContainer, LogOutBtn } from './settingsScreen-styles';
import { fonts, fontWeights } from '../../infrastructure/theme/fonts';

import VerifyEmail from '../../components/functionalities/verifyEmail/verifyEmail-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const SettingsScreen = ({ navigation }) => {
	const { user, onSignOut, isLoading } = useContext(AuthContext);

	if (isLoading) return <LoadingSpinner size={70} yPos="40" />;

	return (
		<Fragment>
			<Header>
				<Text size="h5" weight="bold" font="heading">
					{user.displayName || 'User'}
				</Text>
				<Spacer variants="mt-1 mb-1">
					<Text>
						{user.email}{' '}
						{user.emailVerified ? (
							<Text size="button" color="success">
								Verified
							</Text>
						) : (
							<Text size="button" color="error">
								Unverified
							</Text>
						)}
					</Text>
				</Spacer>
				<VerifyEmail screen="settings" />
			</Header>
			<SettingOptionsContainer>
				<List.Section>
					<List.Item
						title="Account"
						left={props => <List.Icon {...props} icon="account-edit" />}
						onPress={() => navigation.navigate('Account')}
						titleStyle={{ fontFamily: fonts.body2 }}
					/>
					<List.Item
						title="Your Orders"
						left={props => <List.Icon {...props} icon="history" />}
						onPress={() => navigation.navigate('Your Orders')}
						titleStyle={{ fontFamily: fonts.body2 }}
					/>
					<List.Item
						title="Favourites"
						left={props => <List.Icon {...props} icon="heart" />}
						onPress={() => navigation.navigate('Favourites')}
						titleStyle={{ fontFamily: fonts.body2 }}
					/>
				</List.Section>
				<LogOutBtn onPress={() => onSignOut()}>Log Out</LogOutBtn>
			</SettingOptionsContainer>
		</Fragment>
	);
};

export default SettingsScreen;
