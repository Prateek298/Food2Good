import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Ionicons } from '@expo/vector-icons';

import Restaurants from './src/screens/restaurants/restaurants-comp';
import SafeAreaContainer from './src/components/utilities/SafeAreaContainer-comp';

import { theme } from './src/infrastructure/theme';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants-context';

// dummy placeholder components
const Map = () => (
	<SafeAreaContainer>
		<Text>Map Screen</Text>
	</SafeAreaContainer>
);

const Settings = () => (
	<SafeAreaContainer>
		<Text>Settings Screen</Text>
	</SafeAreaContainer>
);

function App() {
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });
	const [ latoLoaded ] = useLato({ Lato_400Regular });

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

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

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<RestaurantContextProvider>
					<Tab.Navigator screenOptions={screenOptions}>
						<Tab.Screen name="Restaurants" component={Restaurants} />
						<Tab.Screen name="Map" component={Map} />
						<Tab.Screen name="Settings" component={Settings} />
					</Tab.Navigator>
				</RestaurantContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</NavigationContainer>
	);
}

export default App;
