import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../../screens/settings/settingsScreen-comp';
import ProfileScreen from '../../screens/profile/profileScreen-comp';
import FavouriteRestaurants from '../../screens/restaurants/favouriteRestaurants-comp';
import AddAddressScreen from '../../screens/profile/addAddressScreen-comp';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen name="Settings Home" component={SettingsScreen} />
		<SettingsStack.Screen name="Account" component={ProfileScreen} />
		<SettingsStack.Screen name="Add Address" component={AddAddressScreen} />
		<SettingsStack.Screen name="Favourites" component={FavouriteRestaurants} />
	</SettingsStack.Navigator>
);

export default SettingsNavigator;
