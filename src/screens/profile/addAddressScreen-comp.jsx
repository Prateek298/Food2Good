import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';

import { FormContainer, AddressInput, SubmitBtn } from './profileScreen-styles';

import { UserSavesContext } from '../../services/userSaves/userSaves-context';

const AddAddressScreen = ({ navigation, route }) => {
	const { address = {} } = route.params;
	const { addAddress, modifyAddress } = useContext(UserSavesContext);
	const [ houseNo, setHouseNo ] = useState(address.houseNo || '');
	const [ locality, setLocality ] = useState(address.locality || '');
	const [ pin, setPin ] = useState(address.pin || '');
	const [ landmark, setLandmark ] = useState(address.landmark || '');
	const [ city, setCity ] = useState(address.city || '');
	const [ state, setState ] = useState(address.state || '');

	const onAddressSubmit = () => {
		const info = { houseNo, locality, pin, landmark, city, state };
		// if address object is received, then modify it, otherwise create a new one
		if (address.id) modifyAddress({ ...info, id: address.id });
		else addAddress(info);
		navigation.navigate('Account');
	};

	return (
		<ScrollView>
			<FormContainer>
				<AddressInput label="House No." value={houseNo} onChangeText={text => setHouseNo(text)} />
				<AddressInput label="Locality" value={locality} onChangeText={text => setLocality(text)} />
				<AddressInput label="Pin Code" value={pin} onChangeText={text => setPin(text)} keyboardType="numeric" />
				<AddressInput label="Landmark (Optional)" value={landmark} onChangeText={text => setLandmark(text)} />
				<AddressInput label="City" value={city} onChangeText={text => setCity(text)} />
				<AddressInput label="State" value={state} onChangeText={text => setState(text)} />
				<SubmitBtn mode="contained" onPress={() => onAddressSubmit()}>
					Save
				</SubmitBtn>
			</FormContainer>
		</ScrollView>
	);
};

export default AddAddressScreen;
