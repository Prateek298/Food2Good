import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsNavigator from './restaurants-navigator';
import MapScreen from '../../screens/map/mapScreen-comp';

import SafeAreaContainer from '../../components/utilities/SafeAreaContainer-comp';

// dummy placeholder component
const Settings = () => (
	<SafeAreaContainer>
		<Text>Settings Screen</Text>
	</SafeAreaContainer>
);

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
	<Tab.Navigator screenOptions={screenOptions}>
		<Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
		<Tab.Screen name="Map" component={MapScreen} />
		<Tab.Screen name="Settings" component={Settings} />
	</Tab.Navigator>
);

export default AppNavigator;
