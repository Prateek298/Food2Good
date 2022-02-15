import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export const SearchBarContainer = styled.View`padding: ${props => props.theme.space[3]};`;

export const RestaurantsList = styled.View`
	flex: 1;
	padding: ${props => props.theme.space[2]} ${props => props.theme.space[2]};
	/* background-color: ${props => props.theme.colors.brand.secondary}; */
`;
