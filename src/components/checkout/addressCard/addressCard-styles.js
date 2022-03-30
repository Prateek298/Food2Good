import styled from 'styled-components/native';
import { Card, IconButton } from 'react-native-paper';

export const StyledCard = styled(Card).attrs({ elevation: 0 })`
    width: 95%;
    margin: 0 auto ${props => props.theme.space[2]};
    ${props => (props.isDefault ? 'border: 5px solid blue' : '')};
`;

export const CardContent = styled(Card.Content)`
    position: relative;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoContainer = styled.View`max-width: 70%;`;

export const MenuControlBtn = styled(IconButton)`
    margin: 0;
`;

export const OptionsContainer = styled.View`
	z-index: 100;
	position: absolute;
	top: 25px;
	right: 45px;
	background-color: #fff;
	border: 2px solid gray;
`;

export const Options = styled.Text`
	padding: ${props => props.theme.space[2]};
	font-size: ${props => props.theme.fontSizes.body};
`;
