import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../../screens/settings/settingsScreen-comp';
import AccountScreen from '../../screens/settings/userAccount/accountScreen-comp';
import FavouriteRestaurants from '../../screens/restaurants/favouriteRestaurants-comp';
import AddAddressScreen from '../../screens/settings/userAccount/addAddressScreen-comp';
import OrdersScreen from '../../screens/settings/userAccount/ordersScreen-comp';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen name="Settings Home" component={SettingsScreen} />
		<SettingsStack.Screen name="Account" component={AccountScreen} />
		<SettingsStack.Screen name="Add Address" component={AddAddressScreen} />
		<SettingsStack.Screen name="Favourites" component={FavouriteRestaurants} />
		<SettingsStack.Screen name="Your Orders" component={OrdersScreen} />
	</SettingsStack.Navigator>
);

export default SettingsNavigator;
