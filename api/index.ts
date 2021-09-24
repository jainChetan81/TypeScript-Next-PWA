import { Difficulty, Question } from "../types";
import { shuffleArray } from "../utils";

/*
 The QuestionState interface is a combination of the Question interface and an array of Answer objects.
*/

const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<any> => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
	const response = await fetch(endpoint);
	const json = await response.json();
	return json.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
	}));
};
export default fetchQuizQuestions;
