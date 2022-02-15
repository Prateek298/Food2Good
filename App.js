import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar, StatusBar } from 'expo-status-bar';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import Restaurants from './src/screens/restaurants/restaurants-comp';

import { theme } from './src/infrastructure/theme';

function App() {
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });
	const [ latoLoaded ] = useLato({ Lato_400Regular });

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Restaurants />
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

export default App;
