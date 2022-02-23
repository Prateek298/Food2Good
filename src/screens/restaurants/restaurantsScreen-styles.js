import styled from 'styled-components/native';

export const RestaurantsList = styled.View`
	flex: 1;
	padding: ${props => props.theme.space[2]} ${props => props.theme.space[2]};
`;

export const ToggleFavourites = styled.View`
	padding-left: ${props => props.theme.space[2]};
	flex-direction: row;
	width: 40%;
	justify-content: space-between;
`;

export const ToggleText = styled.Text`font-size: ${props => props.theme.fontSizes.title};`;

export const LoadingSpinner = styled.ActivityIndicator`
	position: absolute;
	top: 50%;
	left: 50%;
`;
