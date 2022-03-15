import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';

export const ListContainer = styled.View`
	flex: 1;
	padding: ${props => props.theme.space[2]} ${props => props.theme.space[2]};
`;

export const ToggleFavourites = styled.View`
	padding-left: ${props => props.theme.space[2]};
	flex-direction: row;
	width: 40%;
	justify-content: space-between;
`;

export const LoadingSpinner = styled(ActivityIndicator).attrs({
	size: 60
})`
	align-self: center;
	top: 50%;
`;
