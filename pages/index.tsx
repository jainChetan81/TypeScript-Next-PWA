import PropTypes from "prop-types";
import React, { FC, MouseEvent, useState } from "react";
import { GetServerSideProps } from "next";
import fetchQuizQuestions from "../api";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import { AnswerObject, Difficulty, QuestionState } from "../types";
import { Wrapper } from "../styles/App.styles";

const TOTAL_QUESTIONS = 10;

const Home: FC<any> = ({ newQuestion }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState<number>(0);
	const [gameOver, setGameOver] = useState<boolean>(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		setQuestions(newQuestion);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const isCorrect = questions[number].correct_answer === answer;
			if (isCorrect) setScore((prev) => prev + 1);
			const answerObject: AnswerObject = {
				question: questions[number].question,
				answer: e.currentTarget.value,
				isCorrect,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// go to the next question if not the last
		const newQuestion: number = number + 1;
		if (newQuestion < questions.length) {
			setNumber(newQuestion);
		} else {
			setGameOver(true);
		}
	};
	return (
		<Layout>
			<Wrapper>
				<div className="App">
					<h1>Next Quiz</h1>
					{(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
						<button type="button" className="start" onClick={startTrivia}>
							Start
						</button>
					)}
					{!gameOver && <p className="score">Score: {score}</p>}
					{loading && <p>Loading Questions...</p>}
					{!loading && !gameOver && (
						<QuestionCard
							questionNr={number + 1}
							totalQuestions={TOTAL_QUESTIONS}
							question={questions[number]?.question}
							answers={questions[number]?.answers}
							userAnswer={userAnswers ? userAnswers[number] : undefined}
							callback={checkAnswer}
						/>
					)}
					{!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
						<button type="button" className="next" onClick={nextQuestion}>
							Next Question
						</button>
					)}
				</div>
			</Wrapper>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const newQuestion = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
	return { props: { newQuestion } };
};

Home.propTypes = {
	newQuestion: PropTypes.array.isRequired,
};
export default Home;
