export const getRandomBoolean = (x = 0) => {
	return Math.round(Math.random() * (10 + x)) > 5;
};
