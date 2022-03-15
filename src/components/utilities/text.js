import styled from 'styled-components/native';

const generateFontSize = ({ size = null, theme }) => {
	if (size) return theme.fontSizes[size] || `${size}px`;
	return theme.fontSizes.body;
};

const generateFontWeight = ({ weight = null, theme }) => {
	if (weight) return theme.fontWeights[weight] || weight;
	return theme.fontWeights.regular;
};

const generateFontFamily = ({ font = null, theme }) => {
	if (font) return `font-family: ${theme.fonts[font]}`;
};

const generateTextColor = ({ color = null, theme }) => {
	if (color) return theme.colors.text[color] || color;
	return theme.colors.text.primary;
};

const Text = styled.Text`
	font-size: ${props => generateFontSize(props)};
	${props => generateFontFamily(props)};
	font-weight: ${props => generateFontWeight(props)};
	color: ${props => generateTextColor(props)};
`;

export default Text;
