import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Input = styled(TextInput).attrs({
	selectionColor: '#000',
	outlineColor: 'transparent',
	underlineColor: 'transparent',
	activeUnderlineColor: 'transparent'
})`
    width: 60%;
    background-color: transparent;
	font-size: ${props => props.theme.fontSizes.button};
`;
