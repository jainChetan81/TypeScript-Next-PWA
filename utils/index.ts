/*
Importing the shuffleArray function from the shuffleArray.ts file.
creating a new array and copying the original array into it.
randomizing the array
*/
export const shuffleArray = (array: any[]): any[] => {
	return [...array].sort(() => Math.random() - 0.5);
};
