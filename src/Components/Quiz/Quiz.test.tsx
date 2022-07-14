import { InitialState, QuizAction } from './quiz-types';
import { reducerFunc } from "./../../Reducer/reducerFun";

test("renders learn react link", () => {
  const initialState:InitialState = {
    inputAnswer: "answer",
     loading: false,
    data: [],
    error: "",
    message: "",

  };

  const action:QuizAction = {
    type: "INPUT_ANSWER",
    payload: "answer",
  };


  const expectState = {
    inputAnswer: "answer",
 
  };
  const state = reducerFunc(initialState, action);
  expect(state).toEqual(expectState);
});
