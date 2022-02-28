import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const SaveBtn = styled(Button).attrs({ mode: 'contained' })`
    background-color: ${props => props.theme.colors.ui.success};
    font-size: ${props => props.theme.fontSizes.button};
    width: 50%;
    margin: 0 auto;
`;
