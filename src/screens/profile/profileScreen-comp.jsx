import React, { useContext, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { AddBtn } from './profileScreen-styles';

import PropertyEditor from '../../components/propertyEditor/propertyEditor-comp';
import AddressCard from '../../components/addressCard/addressCard-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';
import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const ProfileScreen = ({ navigation }) => {
	const { user, onUpdateProfile } = useContext(AuthContext);
	const { addresses } = useContext(UserSavesContext);
	const [ name, setName ] = useState(user.displayName);
	const [ phone, setPhone ] = useState(user.phoneNumber);

	useEffect(() => onUpdateProfile({ displayName: name }), [ name ]);

	return (
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
		</ScrollView>
	);
};

export default ProfileScreen;
