import React, { useState, createContext } from 'react';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
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

	onAuthStateChanged(auth, userAuth => {
		if (userAuth) {
			setUser(userAuth);
		}
	});

	// required to remove error messages from being shown after they have been displayed one time
	const removeError = () => setError(null);

	const onRegister = async (email, password, confirmPassword) => {
		try {
			if (password !== confirmPassword) {
				setError('Error: Passwords do not match !');
				return;
			}
			setIsLoading(true);
			await createUserWithEmailAndPassword(auth, email, password);
			setIsLoading(false);
		} catch (e) {
			console.log('Registration error', e);
			setError(`Error: ${formatErrorMsg(e)}`);
			setIsLoading(false);
		}
	};

	const verifyEmail = () =>
		sendEmailVerification(user).then(() => console.log('Email sent')).catch(e => console.log(e));

	const onLogin = async (email, password) => {
		try {
			setIsLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			setIsLoading(false);
		} catch (e) {
			console.log('Sign in error', e);
			setError(`Error: ${formatErrorMsg(e)}`);
			setIsLoading(false);
		}
	};

	const onUpdateProfile = async profileInfo => {
		try {
			setIsLoading(true);
			await updateProfile(auth.currentUser, { ...profileInfo });
			setIsLoading(false);
		} catch (e) {
			console.log('Profile update error', e);
			setError(e);
			setIsLoading(false);
		}
	};

	const onSignOut = async () => {
		try {
			setIsLoading(true);
			await signOut(auth);
			setUser(null);
			setIsLoading(false);
		} catch (e) {
			setError(e.toString());
			setIsLoading(false);
		}
	};

	const deleteUserAccount = async password => {
		try {
			setIsLoading(true);
			// Re-authenticate as firebase allows only recently login users to delete their account
			const credential = EmailAuthProvider.credential(user.email, password);
			await reauthenticateWithCredential(user, credential);
			// Deleting user's account
			await deleteUser(user);
			setIsLoading(false);
			setUser(null);
		} catch (e) {
			console.log(e);
			setError(e);
			setIsLoading(false);
		}
	};

	const reloadUserData = async () => {
		try {
			setIsLoading(true);
			await user.reload();
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setError(e);
			setIsLoading(false);
		}
	};

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
				removeError,
				verifyEmail,
				deleteUserAccount,
				reloadUserData
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
