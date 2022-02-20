import styled from 'styled-components/native';

export const RestaurantsList = styled.View`
	flex: 1;
	padding: ${props => props.theme.space[2]} ${props => props.theme.space[2]};
`;

export const LoadingSpinner = styled.ActivityIndicator`
	position: absolute;
	top: 50%;
	left: 50%;
`;
