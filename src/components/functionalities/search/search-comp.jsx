import React, { useState, useEffect, useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import { Spacer } from '../../utilities';

import { LocationContext } from '../../../services/location/location-context';

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
		<Spacer variants="p-3">
			<Searchbar
				placeholder="Search"
				value={searchText}
				onChangeText={query => setSearchText(query)}
				onSubmitEditing={() => searchTermSetter(searchText)}
			/>
		</Spacer>
	);
};

export default Search;
