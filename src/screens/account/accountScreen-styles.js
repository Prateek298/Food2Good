import React from 'react';
import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

const AccountBackground = styled.ImageBackground.attrs({
	source: require('../../../assets/home_bg.jpg')
})`
    flex: 1;
`;

const AccountCover = styled.View`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
	justify-content: center;
	align-items: center;
`;

const AppTitle = styled.Text`
	font-family: ${props => props.theme.fonts.heading};
	font-size: ${props => props.theme.fontSizes.h4};
	font-weight: ${props => props.theme.fontWeights.bold};
	margin-bottom: ${props => props.theme.space[3]};
`;

export const BackgroundCover = ({ children }) => (
	<AccountBackground>
		<AccountCover>
			<AppTitle>Food 2 Good</AppTitle>
			{children}
		</AccountCover>
	</AccountBackground>
);

export const ContentContainer = styled.View`
	padding: ${props => props.theme.space[3]};
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 100;
	max-height: 500px;
	width: ${props => (props.growByContent ? 'auto' : '75%')};
`;

export const StyledButton = styled(Button)`
	padding: ${props => props.theme.space[2]};
	margin-bottom: ${props => (props.mb ? props.theme.space[3] : 0)};
`;

export const StyledTextInput = styled(TextInput)`
	width: 100%;
	margin-bottom: ${props => (props.mb ? props.theme.space[3] : 0)};
`;

export const ErrorText = styled.Text`
	color: ${props => props.theme.colors.text.error};
	font-size: ${props => props.theme.fontSizes.body};
	margin-bottom: ${props => props.theme.space[3]};
	text-align: center;
`;

export const AnimationContainer = styled.View`
	width: 100%;
	height: 40%;
	position: absolute;
	top: 40px;
`;
