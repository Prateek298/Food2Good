import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export const ContentCenterContainer = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
