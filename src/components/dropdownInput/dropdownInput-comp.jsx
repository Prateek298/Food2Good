import React, { useState, Fragment } from 'react';
import { TextInput, List, Divider } from 'react-native-paper';

import { DropdownContainer } from './dropdownInput-styles';

const DropdownInput = ({ data, label, value, setValue }) => {
	const [ showDropdown, setShowDropdown ] = useState(false);

	const onSelect = option => {
		setValue(option);
		setShowDropdown(false);
	};

	return (
		<Fragment>
			<TextInput
				mode="outlined"
				value={value}
				label={label}
				editable={false}
				right={
					<TextInput.Icon
						onPress={() => setShowDropdown(!showDropdown)}
						name={showDropdown ? 'chevron-up' : 'chevron-down'}
					/>
				}
			/>
			{showDropdown && (
				<DropdownContainer>
					{data.map(option => (
						<Fragment key={option}>
							<List.Item title={option} onPress={() => onSelect(option)} />
							<Divider />
						</Fragment>
					))}
				</DropdownContainer>
			)}
		</Fragment>
	);
};

export default DropdownInput;
