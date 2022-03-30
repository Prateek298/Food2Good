import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/auth/homeScreen-comp';
import RegisterScreen from '../../screens/auth/registerScreen-comp';
import LoginScreen from '../../screens/auth/loginScreen-comp';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name="Home" component={HomeScreen} />
		<AuthStack.Screen name="Login" component={LoginScreen} />
		<AuthStack.Screen name="Register" component={RegisterScreen} />
	</AuthStack.Navigator>
);

export default AuthNavigator;
