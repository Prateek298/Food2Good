import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { List, Card, Button } from 'react-native-paper';

import PropertyEditor from '../../components/propertyEditor/propertyEditor-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const ProfileScreen = () => {
	const { user, onUpdateProfile } = useContext(AuthContext);
	const [ name, setName ] = useState(user.displayName);
	const [ phone, setPhone ] = useState(user.phoneNumber);

	useEffect(() => onUpdateProfile({ displayName: name }), [ name ]);

	return (
		<View>
			<List.Section title="Personal Information">
				<PropertyEditor property="Email" defaultValue={user.email} readOnly divider />
				<PropertyEditor property="Name" defaultValue={name} setter={setName} divider />
				<PropertyEditor property="Phone" defaultValue={phone} setter={setPhone} divider />
			</List.Section>
			<List.Section title="Delivery Address">
				<Card>
					<Card.Content>
						<Text>345A</Text>
						<Text>East Beach</Text>
						<Text>Santa Maria</Text>
						<Text>San Andreas</Text>
					</Card.Content>
				</Card>
				<Button icon="plus" mode="text" color="#000">
					Add
				</Button>
			</List.Section>
		</View>
	);
};

export default ProfileScreen;
