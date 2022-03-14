import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

export const PaymentContainer = styled.View`
	padding: 0 ${props => props.theme.space[2]};
	margin: ${props => props.theme.space[2]} 0 ${props => props.theme.space[3]};
`;

export const SectionHeading = styled.Text`
	font-size: ${props => props.theme.fontSizes.title};
	font-weight: ${props => props.theme.fontWeights.bold};
	margin: ${props => props.theme.space[2]};
`;

export const NameInput = styled(TextInput)`
	margin: ${props => props.theme.space[2]} 0 ${props => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
	mode: 'contained',
	icon: 'cash',
	color: '#000'
})`
	width: 90%;
	align-self: center;
	margin-top: ${props => props.theme.space[3]};
	padding: ${props => props.theme.space[1]};
`;
