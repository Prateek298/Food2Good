import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

const generateBgColor = ({ bg = null, theme }) => {
	if (bg) return theme.colors.ui[bg] || bg;
	return theme.colors.brand.primary;
};

const SymbolIcon = styled(Avatar.Icon)`
    background-color: ${props => generateBgColor(props)};
`;

export default SymbolIcon;
