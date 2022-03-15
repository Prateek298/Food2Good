import styled from 'styled-components/native';

const spaceType = {
	m: 'margin',
	p: 'padding'
};

const position = {
	t: 'top',
	l: 'left',
	b: 'bottom',
	r: 'right'
};

const splitVariant = variant => {
	const [ type, space ] = variant.split('-');
	if (type.length === 1) {
		return { kind: type, space };
	}
	else if (type.length === 2) {
		return { kind: type[0], pos: type[1], space };
	}
};

const generateSpacing = (variant, theme) => {
	const details = splitVariant(variant);
	const property = details.pos ? `${spaceType[details.kind]}-${position[details.pos]}` : spaceType[details.kind];
	const value = theme.space[details.space];
	return `${property}: ${value};`;
};

const Spacer = styled.View`
	${props => props.variants.split(' ').reduce((acc, variant) => acc + generateSpacing(variant, props.theme), '')};
`;

export default Spacer;
