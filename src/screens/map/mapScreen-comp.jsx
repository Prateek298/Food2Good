import React, { useState, useEffect, useContext } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View } from 'react-native';

import { SearchContainer, Map, ErrorMsg } from './mapScreen-styles';

import Search from '../../components/search/search-comp';
import CompactRestaurantCard from '../../components/compactRestaurantCard/compactRestaurantCard-comp';

import { LocationContext } from '../../services/location/location-context';
import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const MapScreen = ({ navigation }) => {
	const { searchKeyword, search, location } = useContext(LocationContext);
	const { restaurants = [], error } = useContext(RestaurantsContext);
	const [ searchTerm, setSearchTerm ] = useState(searchKeyword);
	const [ latDelta, setLatDelta ] = useState(0);

	useEffect(
		() => {
			search(searchTerm);
		},
		[ searchTerm ]
	);

	useEffect(
		() => {
			if (!location) return;

			const northeastLat = location.viewport.northeast.lat;
			const southwestLat = location.viewport.southwest.lat;
			setLatDelta(northeastLat - southwestLat);
		},
		[ location ]
	);

	return (
		<View>
			<SearchContainer>
				<Search searchTermSetter={setSearchTerm} />
			</SearchContainer>
			{!location ? (
				<ErrorMsg>{error}</ErrorMsg>
			) : (
				<Map
					region={{
						latitude: location.lat,
						longitude: location.lng,
						latitudeDelta: latDelta,
						longitudeDelta: 0.02
					}}
				>
					{restaurants.map(restaurant => (
						<Marker
							key={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng
							}}
						>
							<Callout onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}>
								<CompactRestaurantCard isMapCallout restaurant={restaurant} />
							</Callout>
						</Marker>
					))}
				</Map>
			)}
		</View>
	);
};

export default MapScreen;
