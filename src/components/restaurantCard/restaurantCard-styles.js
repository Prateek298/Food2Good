import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const StyledCard = styled(Card)`
    margin-bottom: ${props => props.theme.space[2]};
`;

export const CardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[2]};
`;

export const InfoContainer = styled.View`padding: ${props => props.theme.space[2]};`;

export const Name = styled.Text`
	font-family: ${props => props.theme.fonts.heading};
	font-size: ${props => props.theme.fontSizes.title};
	margin-bottom: ${props => props.theme.space[1]};
`;

export const Address = styled.Text`
	font-family: ${props => props.theme.fonts.body};
	font-size: ${props => props.theme.fontSizes.caption};
`;

export const RatingStatusContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: ${props => props.theme.space[2]} 0;
`;

export const Ratings = styled.View`flex-direction: row;`;

export const Status = styled.View`flex-direction: row;`;

export const ClosedTag = styled.Text`
	color: ${props => props.theme.colors.text.error};
	margin: 0 ${props => props.theme.space[2]};
`;

export const Icon = styled.Image`
	width: 20px;
	height: 20px;
	margin: 0 ${props => props.theme.space[2]};
`;
