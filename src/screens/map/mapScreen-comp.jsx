import React, { useState, useEffect, useContext } from 'react';
import { Marker, Callout } from 'react-native-maps';

import { SearchContainer, Map } from './mapScreen-styles';

import Search from '../../components/search/search-comp';
import MapMarkerCallout from '../../components/mapMarkerCallout/mapMarkerCallout-comp';

import { LocationContext } from '../../services/location/location-context';
import { RestaurantsContext } from '../../services/restaurants/restaurants-context';

const MapScreen = ({ navigation }) => {
    const { searchKeyword, search, location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const [ searchTerm, setSearchTerm ] = useState(searchKeyword);
    const [ latDelta, setLatDelta ] = useState(0);

    const { lat, lng, viewport } = location;

    useEffect(() => {
        search(searchTerm);
    }, [ searchTerm ]);

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [ location, viewport ]);

    const region = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: latDelta,
        longitudeDelta: 0.02
    }

    return (
        <>
            <SearchContainer>
                <Search searchTermSetter={setSearchTerm} />
            </SearchContainer>
            <Map region={region}>
                {restaurants.map(restaurant => (
                    <Marker key={restaurant.name} coordinate={{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng
                    }}>
                        <Callout onPress={() => navigation.navigate("RestaurantDetails", { restaurant })}>
                            <MapMarkerCallout restaurant={restaurant} />
                        </Callout>
                    </Marker>
                ))}
            </Map>
        </>
    )
}

export default MapScreen;