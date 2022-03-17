import React, { useContext } from 'react';
import { List } from 'react-native-paper';

import { Text, Spacer } from '../../components/utilities';
import { Header, SettingOptionsContainer, LogOutBtn } from './settingsScreen-styles';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const SettingsScreen = ({ navigation }) => {
	const { user, onSignOut } = useContext(AuthContext);

	return (
		<>
			<Header>
				<Text size="h5" weight="bold" font="heading">{user.displayName || 'User'}</Text>
				<Spacer variants="mb-1" />
				<Text>{user.email}</Text>
			</Header>
			<SettingOptionsContainer>
				<List.Section>
					<List.Item
						title="Account"
						left={props => <List.Icon {...props} icon="account-edit" />}
						onPress={() => navigation.navigate('Account')}
					/>
					<List.Item 
						title="Your Orders" 
						left={props => <List.Icon {...props} icon="history" />}
						onPress={() => navigation.navigate('Your Orders')}
					/>
					<List.Item
						title="Favourites"
						left={props => <List.Icon {...props} icon="heart" />}
						onPress={() => navigation.navigate('Favourites')}
					/>
				</List.Section>
				<LogOutBtn onPress={() => onSignOut()}>Log Out</LogOutBtn>
			</SettingOptionsContainer>
		</>
	);
};

export default SettingsScreen;
