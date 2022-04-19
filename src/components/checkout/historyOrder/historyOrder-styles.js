import styled from 'styled-components/native';
import { List } from 'react-native-paper';

import { fonts } from '../../../infrastructure/theme/fonts';

export const Dropdown = styled(List.Accordion).attrs({
	titleStyle: { fontFamily: fonts.body }
})`
    background-color: #fff;
    padding: 0;
    margin: 0;
`;

export const Item = styled(List.Item)`
    padding: 0;
    margin: 0;
`;
