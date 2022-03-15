import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const Header = styled.View`
	width: 100%;
	justify-content: center;
	padding: ${props => props.theme.space[3]};
	/* background-color: lightblue; */
`;

export const SettingOptionsContainer = styled.View`
	flex: 1;
	/* background-color: lightgreen; */
`;

export const LogOutBtn = styled(Button).attrs({ mode: 'contained' })`
    width: 30%;
    max-width: 200px;
    margin: ${props => props.theme.space[3]} auto 0;
    background-color: ${props => props.theme.colors.ui.error};
`;
