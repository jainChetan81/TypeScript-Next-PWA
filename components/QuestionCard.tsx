import PropTypes from "prop-types";
import { FC, MouseEvent } from "react";
import { ButtonWrapper } from "../styles/QuestionCard.styles";
import { AnswerObject } from "../types";

type Props = {
	question: string;
	answers: string[];
	callback: (e: MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
};
const QuestionCard: FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
	<div>
		<p className="number">
			Question: {questionNr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers?.map((answer) => (
				<ButtonWrapper
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
					key={answer}
				>
					<button type="button" disabled={!!userAnswer} value={answer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</div>
);

QuestionCard.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.array.isRequired,
	callback: PropTypes.func.isRequired,
	userAnswer: PropTypes.any,
	questionNr: PropTypes.number.isRequired,
	totalQuestions: PropTypes.number.isRequired,
};

export default QuestionCard;
