import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const SearchContainer = styled.View`
	position: absolute;
	top: 40px;
	z-index: 100;
	width: 100%;
`;

export const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;
