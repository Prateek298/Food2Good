import React, { useContext, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { List, Provider, Portal, Dialog, Button } from 'react-native-paper';

import { Text, Spacer, LoadingSpinner, PropertyEditor } from '../../../components/utilities';
import { AddBtn, DeleteBtn, PasswordInput } from './accountScreens-styles';

import { AddressCard } from '../../../components/checkout';

import { AuthContext } from '../../../services/firebase/auth/auth-context';
import { UserSavesContext } from '../../../services/userSaves/userSaves-context';

const AccountScreen = ({ navigation }) => {
	const { user, onUpdateProfile, deleteUserAccount, isLoading } = useContext(AuthContext);
	const { addresses } = useContext(UserSavesContext);
	const [ name, setName ] = useState(user.displayName);
	const [ phone, setPhone ] = useState(user.phoneNumber);
	const [ showDeletePrompt, setShowDeletePrompt ] = useState(false);
	const [ password, setPassword ] = useState('');

	useEffect(() => onUpdateProfile({ displayName: name }), [ name ]);

	if (isLoading) return <LoadingSpinner size={70} yPos="40" />;

	return (
		<Provider>
			<ScrollView>
				<List.Section title="Personal Information">
					<PropertyEditor property="Email" defaultValue={user.email} readOnly divider />
					<PropertyEditor property="Name" defaultValue={name} setter={setName} divider />
					<PropertyEditor property="Phone" defaultValue={phone} setter={setPhone} divider />
				</List.Section>
				<List.Section title="Delivery Address">
					{addresses.map((address, i) => (
						<AddressCard key={i} address={address} onNavigate={navigation.navigate} />
					))}
					<AddBtn onPress={() => navigation.navigate('Add Address', { address: {} })}>Add More</AddBtn>
				</List.Section>
				<DeleteBtn onPress={() => setShowDeletePrompt(true)}>Delete Account</DeleteBtn>
				<Portal>
					<Dialog visible={showDeletePrompt} onDismiss={() => setShowDeletePrompt(false)}>
						<Dialog.Title>Confirm Delete ?</Dialog.Title>
						<Dialog.Content>
							<Text>Enter your password to continue</Text>
							<Spacer variants="mb-1" />
							<PasswordInput
								value={password}
								onChangeText={pass => setPassword(pass)}
								secureTextEntry
								autoCapitalize="none"
							/>
						</Dialog.Content>
						<Dialog.Actions>
							<Button
								color="red"
								onPress={() => {
									setShowDeletePrompt(false);
									deleteUserAccount(password);
								}}
							>
								Confirm
							</Button>
							<Button color="#000" onPress={() => setShowDeletePrompt(false)}>
								Cancel
							</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</ScrollView>
		</Provider>
	);
};

export default AccountScreen;
