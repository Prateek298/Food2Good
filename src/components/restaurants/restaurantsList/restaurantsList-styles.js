import styled from 'styled-components/native';

import { SymbolIcon } from '../../utilities';

export const ErrorContainer = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const ErrorIcon = styled(SymbolIcon)`
    margin: -50px 0 ${props => props.theme.space[3]};
`;
