import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import AppNavigator from './src/infrastructure/navigation/app-navigator';

import { theme } from './src/infrastructure/theme';
import { LocationContextProvider } from './src/services/location/location-context';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants-context';
import { FavouritesContextProvider } from './src/services/favourites/favourites-context';

function App() {
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });
	const [ latoLoaded ] = useLato({ Lato_400Regular });

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantContextProvider>
							<AppNavigator />
						</RestaurantContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

export default App;
