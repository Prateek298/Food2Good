import styled from 'styled-components/native';
import { List } from 'react-native-paper';

export const Item = styled(List.Item)`
    padding: ${props => props.theme.space[2]};
`;

export const DishName = styled.Text`
	font-size: ${props => props.theme.fontSizes.body};
	margin-bottom: ${props => props.theme.space[1]};
`;

export const Price = styled.Text`
	font-size: ${props => props.theme.fontSizes.caption};
	color: ${props => props.theme.colors.text.secondary};
`;
