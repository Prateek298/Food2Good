import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const SafeAreaContainer = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
`;

export default SafeAreaContainer;
