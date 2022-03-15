import styled from 'styled-components/native';
import { Avatar, Button } from 'react-native-paper';

import { SafeAreaContainer } from '../../components/utilities';

export const EmptyCartContainer = styled(SafeAreaContainer)`
	justify-content: center;
	align-items: center;
`;

export const EmptyIcon = styled(Avatar.Icon).attrs({
	icon: 'cart-off',
	size: 128
})`
	margin: ${props => props.theme.space[2]} 0;
`;

export const Symbol = styled(Avatar.Icon)`
	background-color: ${props => (props.success ? props.theme.colors.ui.success : props.theme.colors.ui.error)};
	margin: ${props => props.theme.space[2]} 0;
`;

export const Overlay = styled.View`
	z-index: 10;
	background-color: rgba(255, 255, 255, 0.5);
	width: 100%;
	height: 100%;
	position: absolute;
	justify-content: center;
	align-items: center;
`;

export const FeedbackContainer = styled.View.attrs({ elevation: 5 })`
	z-index: 100;
	background-color: #fff;
	padding: ${props => props.theme.space[2]};
	width: 60%;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

export const ConfirmButton = styled(Button).attrs({ mode: 'contained' })`
	width: 50%;
	background-color: ${props => (props.success ? props.theme.colors.ui.success : props.theme.colors.ui.error)};
	margin: ${props => props.theme.space[2]} 0;
`;
