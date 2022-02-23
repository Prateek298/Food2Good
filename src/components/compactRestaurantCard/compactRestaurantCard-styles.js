import styled, { css } from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const CompactContainer = styled.View`
	max-width: 130px;
	align-items: center;
	padding: ${props => props.theme.space[2]};
	border-radius: 10px;
`;

const imageStyles = css`
	border-radius: 10px;
	height: 100px;
	width: 120px;
`;

export const ImageNative = styled.Image`${imageStyles};`;

export const ImageWebView = styled(WebView)`
	${imageStyles};
`;

export const Name = styled.Text`
	font-family: ${props => props.theme.fonts.heading};
	margin: ${props => props.theme.space[2]} 0;
`;
