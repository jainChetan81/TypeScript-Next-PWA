export type AnswerObject = {
	question: string;
	answer: string;
	isCorrect: boolean;
	correctAnswer: string;
};
export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: [];
	question: string;
	type: string;
};
export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}
export type QuestionState = Question & { answers: [] };
