import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const CartContainer = styled.View`
	max-height: 625px;
	padding: ${props => props.theme.space[2]};
`;

export const SectionHeading = styled.Text`
	font-size: ${props => props.theme.fontSizes.title};
	font-weight: ${props => props.theme.fontWeights.bold};
	margin: ${props => props.theme.space[2]};
`;

export const Total = styled.Text`
	padding-left: ${props => props.theme.space[2]};
	margin-top: ${props => props.theme.space[2]};
	font-size: ${props => props.theme.fontSizes.body};
	font-weight: ${props => props.theme.fontWeights.bold};
`;

export const ClearButton = styled(Button).attrs({
	mode: 'contained',
	icon: 'cart-off'
})`
	width: 90%;
	align-self: center;
	background-color: ${props => props.theme.colors.ui.error};
	margin-top: ${props => props.theme.space[3]};
	padding: ${props => props.theme.space[1]};
`;
