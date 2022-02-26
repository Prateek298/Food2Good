import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsNavigator from './restaurants-navigator';
import MapScreen from '../../screens/map/mapScreen-comp';

import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

import { AuthContext } from '../../services/firebase/auth/auth-context';
import { FavouritesContextProvider } from '../../services/favourites/favourites-context';
import { LocationContextProvider } from '../../services/location/location-context';
import { RestaurantContextProvider } from '../../services/restaurants/restaurants-context';

// dummy placeholder component
const Settings = () => {
	const { onSignOut } = useContext(AuthContext);
	return (
		<SafeAreaContainer>
			<Text>Settings Screen</Text>
			<Button title="Sign Out" onPress={() => onSignOut()} />
		</SafeAreaContainer>
	);
};

const Tab = createBottomTabNavigator();

const NAV_ICONS = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'ios-settings'
};

const screenOptions = ({ route }) => ({
	tabBarIcon: ({ color, size }) => {
		const icon = NAV_ICONS[route.name];
		return <Ionicons name={icon} size={size} color={color} />;
	},
	tabBarActiveTintColor: 'tomato',
	tabBarInactiveTintColor: 'gray',
	headerShown: false
});

const AppNavigator = () => (
	<FavouritesContextProvider>
		<LocationContextProvider>
			<RestaurantContextProvider>
				<Tab.Navigator screenOptions={screenOptions}>
					<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
					<Tab.Screen name="Map" component={MapScreen} />
					<Tab.Screen name="Settings" component={Settings} />
				</Tab.Navigator>
			</RestaurantContextProvider>
		</LocationContextProvider>
	</FavouritesContextProvider>
);

export default AppNavigator;
