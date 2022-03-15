import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

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
