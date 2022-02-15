import React from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { Container, SearchBarContainer, RestaurantsList } from './restaurants-styles';

import RestaurantCard from '../../components/restaurantCard/restaurantCard-comp';

const Restaurants = () => {
	return (
		<Container>
			<SearchBarContainer>
				<Searchbar placeholder="Search" />
			</SearchBarContainer>
			<RestaurantsList>
				<FlatList
					data={[ { name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 } ]}
					renderItem={() => <RestaurantCard />}
					keyExtractor={item => item.name}
				/>
			</RestaurantsList>
		</Container>
	);
};

export default Restaurants;
