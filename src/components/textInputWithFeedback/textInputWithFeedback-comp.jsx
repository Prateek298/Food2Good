import React, { useState, useEffect, Fragment } from 'react';
import { TextInput } from 'react-native-paper';

import { Text } from '../utilities';

const generateColorByResult = res => {
	if (!res) return 'black';
	return res.wasSuccess ? 'green' : 'red';
};

const TextInputWithFeedback = ({ validatorFn, onStatusChange, ...inputProps }) => {
	const [ result, setResult ] = useState(null);

	useEffect(
		() => {
			if (result && result.wasSuccess) onStatusChange(true);
			else onStatusChange(false);
		},
		[ result ]
	);

	return (
		<Fragment>
			<TextInput
				onBlur={() => setResult(validatorFn())}
				mode="outlined"
				outlineColor={generateColorByResult(result)}
				{...inputProps}
			/>
			{result &&
			!result.wasSuccess && (
				<Text size="caption" color="error">
					{result.message}
				</Text>
			)}
		</Fragment>
	);
};

export default TextInputWithFeedback;
