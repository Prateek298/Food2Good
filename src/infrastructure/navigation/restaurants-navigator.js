import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import RestaurantsScreen from '../../screens/restaurants/restaurantsScreen-comp';
import RestaurantDetails from '../../screens/restaurants/restaurantsDetails-comp';

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => (
	<RestaurantsStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}>
		<RestaurantsStack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
		<RestaurantsStack.Screen name="RestaurantDetails" component={RestaurantDetails} />
	</RestaurantsStack.Navigator>
);

export default RestaurantsNavigator;
