import styled from 'styled-components/native';

export const RatingStatusContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: ${props => props.theme.space[2]} 0;
`;

export const Row = styled.View`flex-direction: row;`;

export const ClosedTag = styled.Text`
	color: ${props => props.theme.colors.text.error};
	margin: 0 ${props => props.theme.space[2]};
`;

export const Icon = styled.Image`
	width: 20px;
	height: 20px;
	margin: 0 ${props => props.theme.space[2]};
`;
