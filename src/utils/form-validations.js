export const requiredField = value => {
	const result = { wasSuccess: value.length };
	return result.wasSuccess ? result : { ...result, message: 'This is required' };
};

export const validateEmailSyntax = email => {
	if (!email.length) return { wasSuccess: false, message: 'This is required' };

	const emailRegEx = /^\S+@\S+\.\S+$/;
	const result = { wasSuccess: emailRegEx.test(email) };
	return result.wasSuccess ? result : { ...result, message: 'Invalid email syntax' };
};

export const checkPasswordStrength = password => {
	if (!password.length) return { wasSuccess: false, message: 'This is required' };

	const passwordRegEx = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{6,})/g;
	const message = 'Required: Atleast one capital, lower alphabet, digit and must be greater than 6 characters';
	const result = { wasSuccess: passwordRegEx.test(password) };
	return result.wasSuccess ? result : { ...result, message };
};

export const checkPasswordConfirm = (password, confirmPassword) => {
	if (!confirmPassword.length) return { wasSuccess: false, message: 'This is required' };

	const result = { wasSuccess: password === confirmPassword };
	return result.wasSuccess ? result : { ...result, message: "Passwords don't match" };
};

export const checkPinCode = pin => {
	if (!pin.length) return { wasSuccess: false, message: 'This is required' };

	const pinRegEx = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/; // For India
	const result = { wasSuccess: pinRegEx.test(pin) };
	return result.wasSuccess ? result : { ...result, message: 'Invalid PIN' };
};
