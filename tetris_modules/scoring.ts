export const calculateScore = (numLinesCleared: number) => (level: number) => {
	const scoreTable = [40, 100, 300, 1200]; // base score for line clears in order from 1-4
	return numLinesCleared > 0 // only returns a non-zero score if more than 0 lines are cleared
		? (level + 1) * scoreTable[(numLinesCleared - 1) % 4] // the score is calculated based on the standardised score calculations
		: 0; // score is 0 if 0 or less lines cleared
};

export const calculateLevel = (numLinesCleared: number) =>
	numLinesCleared > 0 // only returns a non-zero level if more than 0 lines cleared
		? Math.floor((Math.sqrt(25 + 20 * numLinesCleared) - 5) / 10) // mathematical wizardry (when 10 is added next level when 20 is added next level etc.)
		: 0; // level is 0 if 0 or less lines cleared

export const calculateSpeed = (level: number): number =>
	10 * Math.pow(0.8 - (level - 1) * 0.007, level - 1); // maths wizardry from the tetris gods
