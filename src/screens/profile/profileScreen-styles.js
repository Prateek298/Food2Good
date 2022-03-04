import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

export const AddBtn = styled(Button).attrs({ icon: 'plus', color: 'blue' })`
    width: 130px;
`;

export const FormContainer = styled.View`
	width: 100%;
	padding: ${props => props.theme.space[3]};
`;

export const AddressInput = styled(TextInput).attrs({ mode: 'outlined' })`
    font-size: ${props => props.theme.fontSizes.body};
    margin-bottom: ${props => props.theme.space[2]};
`;

export const SubmitBtn = styled(Button).attrs({ mode: 'contained' })`
    width: 80px;
    margin: ${props => props.theme.space[2]} auto 0;
`;
