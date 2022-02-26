import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import Navigation from './src/infrastructure/navigation';

import { theme } from './src/infrastructure/theme';

import { AuthContextProvider } from './src/services/firebase/auth/auth-context';

function App() {
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });
	const [ latoLoaded ] = useLato({ Lato_400Regular });

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthContextProvider>
					<Navigation />
				</AuthContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

export default App;
