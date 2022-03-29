import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAOXsWHwvPejfF3AYORQMa-tAe7QaG1uw8',
	authDomain: 'food2good-e0216.firebaseapp.com',
	projectId: 'food2good-e0216',
	storageBucket: 'food2good-e0216.appspot.com',
	messagingSenderId: '1007588340115',
	appId: '1:1007588340115:web:36c069b7eebbc27912b866'
};

export const app = initializeApp(firebaseConfig, 'Food 2 Good');
