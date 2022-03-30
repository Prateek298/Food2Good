import React, { useState, useContext } from 'react';
import { TouchableRipple } from 'react-native-paper';

import { Text } from '../../utilities';
import {
	StyledCard,
	CardContent,
	InfoContainer,
	MenuControlBtn,
	OptionsContainer,
	Options
} from './addressCard-styles';

import { UserSavesContext } from '../../../services/userSaves/userSaves-context';

const AddressCard = ({ address, onNavigate }) => {
	const { houseNo, locality, pin, landmark, city, state, isDefault } = address;
	const [ showMenu, setShowMenu ] = useState(false);
	const { removeAddress, makeAddressDefault } = useContext(UserSavesContext);

	return (
		<StyledCard isDefault={isDefault}>
			<CardContent>
				<InfoContainer>
					<Text>{houseNo}</Text>
					{landmark.length > 0 && <Text>Near {landmark}</Text>}
					<Text>
						{locality} - {pin}
					</Text>
					<Text>{city}</Text>
					<Text>{state}</Text>
				</InfoContainer>
				<MenuControlBtn
					icon={showMenu ? 'window-close' : 'dots-vertical'}
					onPress={() => setShowMenu(!showMenu)}
				/>
				{showMenu && (
					<OptionsContainer>
						{!isDefault && (
							<TouchableRipple onPress={() => makeAddressDefault(address)}>
								<Options>Set as Default</Options>
							</TouchableRipple>
						)}
						<TouchableRipple onPress={() => onNavigate('Add Address', { address })}>
							<Options>Edit</Options>
						</TouchableRipple>
						<TouchableRipple onPress={() => removeAddress(address)}>
							<Options>Delete</Options>
						</TouchableRipple>
					</OptionsContainer>
				)}
			</CardContent>
		</StyledCard>
	);
};

export default AddressCard;
