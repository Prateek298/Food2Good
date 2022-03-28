import styled from 'styled-components/native';

export const DropdownContainer = styled.View.attrs({ elevation: 5 })`
	background-color: #fff;
	margin-top: ${props => props.theme.space[1]};
	z-index: 10;
	width: 100%;
`;
