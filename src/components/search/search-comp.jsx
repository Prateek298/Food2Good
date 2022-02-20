import React, { useState, useEffect, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../services/location/location-context';

const SearchBarContainer = styled.View`padding: ${props => props.theme.space[3]};`;

const Search = ({ searchTermSetter }) => {
	const { searchKeyword } = useContext(LocationContext);
	const [ searchText, setSearchText ] = useState(searchKeyword);

	useEffect(
		() => {
			setSearchText(searchKeyword);
		},
		[ searchKeyword ]
	);

	return (
		<SearchBarContainer>
			<Searchbar
				placeholder="Search"
				value={searchText}
				onChangeText={query => setSearchText(query)}
				onSubmitEditing={() => searchTermSetter(searchText)}
			/>
		</SearchBarContainer>
	);
};

export default Search;
