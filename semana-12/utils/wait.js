export const wait = (timeout) =>
	new Promise((resolve) => setTimeout(resolve, timeout * 1000));
