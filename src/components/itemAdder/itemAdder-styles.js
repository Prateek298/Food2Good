import styled from 'styled-components/native';
import { IconButton } from 'react-native-paper';

export const ItemAdderContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ChangeQtyBtn = styled(IconButton).attrs({
	size: 15,
	color: '#fff'
})`
    background-color: purple;
    border-radius: 5px;
`;
