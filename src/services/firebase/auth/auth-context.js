import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'react-native';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	sendPasswordResetEmail,
	EmailAuthProvider,
	reauthenticateWithCredential,
	deleteUser
} from 'firebase/auth';

import { app } from '../config';

const auth = getAuth(app);

const formatErrorMsg = msg => {
	msg = msg.toString();
	const startIdx = msg.lastIndexOf('/') + 1;
	const endIdx = msg.lastIndexOf(')');
	return msg.slice(startIdx, endIdx);
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, userAuth => {
			if (userAuth) {
				setUser(userAuth);
			}
		});
		return unsubscribe;
	}, []);

	useEffect(
		() => {
			if (!error) return;

			const createErrorAlert = () => {
				const errorMsg = formatErrorMsg(error);
				return Alert.alert('Error !', `${errorMsg}`, [ { text: 'OK', onPress: () => setError(null) } ]);
			};
			createErrorAlert();
		},
		[ error ]
	);

	// wraps async functions to provide a common handling (refactors code)
	const handleAsync = func => {
		setIsLoading(true);
		func().catch(e => setError(e)).finally(() => setIsLoading(false));
	};

	const onRegister = (email, password, confirmPassword) =>
		handleAsync(async () => {
			if (password !== confirmPassword) {
				setError('Passwords do not match !');
				return;
			}
			await createUserWithEmailAndPassword(auth, email, password);
		});

	const verifyEmail = () => handleAsync(async () => await sendEmailVerification(user));

	const onLogin = (email, password) =>
		handleAsync(async () => await signInWithEmailAndPassword(auth, email, password));

	const onUpdateProfile = profileInfo =>
		handleAsync(async () => await updateProfile(auth.currentUser, { ...profileInfo }));

	const onForgetPassword = email => handleAsync(async () => await sendPasswordResetEmail(auth, email));

	const onSignOut = () =>
		handleAsync(async () => {
			await signOut(auth);
			setUser(null);
		});

	const deleteUserAccount = password =>
		handleAsync(async () => {
			// Re-authenticate as firebase allows only recently login users to delete their account
			const credential = EmailAuthProvider.credential(user.email, password);
			await reauthenticateWithCredential(user, credential);
			// Deleting user's account
			await deleteUser(user);
			setUser(null);
		});

	const reloadUserData = () => handleAsync(async () => await user.reload());

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				isLoading,
				error,
				onRegister,
				onLogin,
				onSignOut,
				onUpdateProfile,
				onForgetPassword,
				verifyEmail,
				deleteUserAccount,
				reloadUserData
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
