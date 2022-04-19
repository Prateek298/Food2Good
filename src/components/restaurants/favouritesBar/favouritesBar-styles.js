import styled from 'styled-components/native';

export const FavouritesContainer = styled.View.attrs({ elevation: 2 })`
	padding: ${props => props.theme.space[2]};
	max-height: 200px;
	border-radius: 20px;
	background-color: ${props => props.theme.colors.bg.secondary};
`;
