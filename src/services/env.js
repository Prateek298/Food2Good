// import { Platform } from 'react-native';
import { LIVEHOST_URL } from '@env';

// using localhost fails the fetch on Android, 10.0.2.2 fixes the problem for android emulators (not for real android device)
// const ip = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
// const localhostUrl = `http://${ip}:5001/food2good-e0216/us-central1`;

// https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api
// After implementing the above solution, localhost works for the configured devices
const localhostUrl = `http://localhost:5001/food2good-e0216/us-central1`;

// due to a bug in react-native-dotenv, process.env.NODE_ENV returned undefined, although having correct value of process.env, so I used this workaround
const inDev = Object.values(process.env)[0] === 'development';

export const hostUrl = inDev ? localhostUrl : LIVEHOST_URL;
