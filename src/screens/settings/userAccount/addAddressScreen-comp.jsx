import React, { useState, useContext, Fragment } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import { FormContainer, SubmitBtn } from './accountScreens-styles';
import { Spacer, TextInputWithFeedback, DropdownInput } from '../../../components/utilities';

import { UserSavesContext } from '../../../services/userSaves/userSaves-context';

import { getRegionInfoFromPin } from '../../../services/location/location-service';
import { checkPinCode, requiredField } from '../../../utils/form-validations';

const AddAddressScreen = ({ navigation, route }) => {
	const { address = {} } = route.params;
	const { addAddress, modifyAddress } = useContext(UserSavesContext);

	const [ houseNo, setHouseNo ] = useState(address.houseNo || '');
	const [ landmark, setLandmark ] = useState(address.landmark || '');
	const [ pin, setPin ] = useState(address.pin || '');

	// Region-based fields (derived from pin)
	const [ localityList, setLocalityList ] = useState([]);
	const [ locality, setLocality ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('');

	const [ showRegionFields, setShowRegionFields ] = useState(false);
	const [ inputFieldsStatus, setInputFieldsStatus ] = useState({
		houseNo: false,
		pin: false
	});

	const changeStatus = field => newStatus => setInputFieldsStatus({ ...inputFieldsStatus, [field]: newStatus });

	const getPinInfo = async () => {
		try {
			if (!inputFieldsStatus['pin']) return setShowRegionFields(false);

			const { localityNames, districtName, stateName } = await getRegionInfoFromPin(pin);
			setLocalityList(localityNames);
			setCity(districtName);
			setState(stateName);
			// dont show the region fields when data for the pin is not found
			setShowRegionFields(localityNames.length ? true : false);
		} catch (e) {
			console.log(e);
		}
	};

	const onAddressSubmit = () => {
		// check whether all the field that need to be validated are ok or not
		if (Object.keys(inputFieldsStatus).includes(false)) return;

		const info = { houseNo, locality, pin, landmark, city, state };
		// if address object is received, then modify it, otherwise create a new one
		if (address.id) modifyAddress({ ...info, id: address.id });
		else addAddress(info);
		navigation.navigate('Account');
	};

	return (
		<ScrollView>
			<FormContainer>
				<TextInputWithFeedback
					validatorFn={() => requiredField(houseNo)}
					onStatusChange={changeStatus('houseNo')}
					label="House No."
					value={houseNo}
					onChangeText={text => setHouseNo(text)}
				/>
				<Spacer variants="mb-2" />
				<TextInput
					mode="outlined"
					label="Landmark (Optional)"
					value={landmark}
					onChangeText={text => setLandmark(text)}
				/>
				<Spacer variants="mb-2" />
				<TextInputWithFeedback
					validatorFn={() => checkPinCode(pin)}
					onStatusChange={changeStatus('pin')}
					label="Pin Code"
					value={pin}
					onChangeText={text => setPin(text)}
					onEndEditing={getPinInfo}
					keyboardType="numeric"
				/>
				<Spacer variants="mb-2" />
				{showRegionFields && (
					<Fragment>
						<DropdownInput
							data={localityList}
							label="Choose locality"
							value={locality}
							setValue={setLocality}
						/>
						<Spacer variants="mb-2" />
						<TextInput mode="outlined" label="City" value={city} editable={false} />
						<Spacer variants="mb-2" />
						<TextInput mode="outlined" label="State" value={state} editable={false} />
						<Spacer variants="mb-2" />
					</Fragment>
				)}
				<SubmitBtn mode="contained" onPress={() => onAddressSubmit()}>
					Save
				</SubmitBtn>
			</FormContainer>
		</ScrollView>
	);
};

export default AddAddressScreen;
