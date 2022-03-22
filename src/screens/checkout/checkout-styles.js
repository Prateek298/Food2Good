import styled from 'styled-components/native';
import { Button, Dialog } from 'react-native-paper';

export const ProcessingDialog = styled(Dialog)`
	width: 0;
	height: 0;
	align-self: center;
`;

export const PaymentFeedbackDialog = styled(Dialog)`
	width: 60%;
	max-width: 350px;
	padding: ${props => props.theme.space[2]} 0;
	align-self: center;
	justify-content: center;
	align-items: center;
`;

export const ConfirmButton = styled(Button).attrs({ mode: 'contained' })`
	width: 50%;
	background-color: ${props => (props.success ? props.theme.colors.ui.success : props.theme.colors.ui.error)};
	margin: ${props => props.theme.space[2]} 0;
`;
