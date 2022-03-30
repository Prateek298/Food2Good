import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const Navigation = () => {
	const { isAuthenticated } = useContext(AuthContext);
	return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default Navigation;
