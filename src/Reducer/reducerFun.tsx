import { QuizAction } from "../Components/Quiz/quiz-types";
import { InitialState } from "../Components/Quiz/quiz-types";
export const reducerFunc = (state: InitialState, action: QuizAction) => {
  switch (action.type) {
    case "INPUT_ANSWER":
      return { ...state, inputAnswer: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "DATA":
      return { ...state, data: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "SHOW_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
