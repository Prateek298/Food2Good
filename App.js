import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useNunito, Nunito_400Regular } from '@expo-google-fonts/nunito';

import Navigation from './src/infrastructure/navigation';

import { theme } from './src/infrastructure/theme';

import { AuthContextProvider } from './src/services/firebase/auth/auth-context';

function App() {
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });
	const [ latoLoaded ] = useLato({ Lato_400Regular });
	const [ nunitoLoaded ] = useNunito({ Nunito_400Regular });

	if (!oswaldLoaded || !latoLoaded || !nunitoLoaded) {
		return null;
	}

	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<AuthContextProvider>
					<Navigation />
				</AuthContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</Fragment>
	);
}

export default App;
