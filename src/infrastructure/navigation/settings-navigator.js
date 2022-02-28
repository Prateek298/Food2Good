import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../../screens/settings/settingsScreen-comp';
import ProfileScreen from '../../screens/profile/profileScreen-comp';
import FavouriteRestaurants from '../../screens/restaurants/favouriteRestaurants-comp';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen name="Settings Home" component={SettingsScreen} />
		<SettingsStack.Screen name="Account" component={ProfileScreen} />
		<SettingsStack.Screen name="Favourites" component={FavouriteRestaurants} />
	</SettingsStack.Navigator>
);

export default SettingsNavigator;
