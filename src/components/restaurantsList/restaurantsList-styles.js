import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

export const ErrorContainer = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const ErrorIcon = styled(Avatar.Icon).attrs({
	icon: 'map-marker-off',
	size: 128
})`
    margin: -50px 0 ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.brand.primary};
`;
