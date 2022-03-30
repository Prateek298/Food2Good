import styled from 'styled-components/native';
import { List } from 'react-native-paper';

export const Dropdown = styled(List.Accordion)`
    background-color: #fff;
    padding: 0;
    margin: 0;
`;

export const Item = styled(List.Item)`
    padding: 0;
    margin: 0;
`;

export const RowGroup = styled.View`flex-direction: row;`;
