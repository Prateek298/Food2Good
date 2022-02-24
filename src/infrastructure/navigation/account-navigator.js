import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/account/homeScreen-comp';
import RegisterScreen from '../../screens/account/registerScreen-comp';
import LoginScreen from '../../screens/account/loginScreen-comp';

const AccountStack = createStackNavigator();

const AccountNavigator = () => (
	<AccountStack.Navigator screenOptions={{ headerShown: false }}>
		<AccountStack.Screen name="Home" component={HomeScreen} />
		<AccountStack.Screen name="Login" component={LoginScreen} />
		<AccountStack.Screen name="Register" component={RegisterScreen} />
	</AccountStack.Navigator>
);

export default AccountNavigator;
