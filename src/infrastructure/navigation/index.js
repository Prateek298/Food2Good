import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app-navigator';
import AccountNavigator from './account-navigator';

import { AuthContext } from '../../services/firebase/auth/auth-context';

const Navigation = () => {
	const { isAuthenticated } = useContext(AuthContext);
	return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>;
};

export default Navigation;
