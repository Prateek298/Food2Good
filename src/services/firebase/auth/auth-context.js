import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	return (
		<AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, error }}>
			{children}
		</AuthContext.Provider>
	);
};
