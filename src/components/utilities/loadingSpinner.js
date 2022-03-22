import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

const createStyle = ({ yPos = null, xPos = null }) => {
	let styleString = '';
	if (yPos) {
		styleString += `top: ${yPos === 'center' ? '50%' : `${yPos}%`};`;
	}
	if (xPos) {
		styleString += xPos === 'center' ? 'align-self: center;' : `left: ${xPos}%;`;
	}
	return styleString;
};

const LoadingSpinner = styled(ActivityIndicator)`
    ${props => createStyle(props)}
`;

export default LoadingSpinner;
