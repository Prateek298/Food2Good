import { Platform } from 'react-native';
import { LIVEHOST_URL } from '@env';

// using localhost fails the fetch on Android, 10.0.2.2 fixes the problem for android emulators (not for real android device)
const ip = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const localhostUrl = `http://${ip}:5001/food2good-e0216/us-central1`;

export const hostUrl = process.env.NODE_ENV === 'development' ? localhostUrl : LIVEHOST_URL;
