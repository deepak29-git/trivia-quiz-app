import { QuizAction, InitialState } from "./Quiz/quiz-types";
import { reducerFunc } from "../Reducer/reducerFun";

describe("test reducer", () => {
  const initialState:InitialState = {
    inputAnswer: "",
    loading: false,
    data: [{name:"deepak"}],
    error:"error",
    message:"message"
  };

  const action :QuizAction= {
    type: "INPUT_ANSWER",
    payload: "answer",
  } || {
      type: "LOADING",
      payload: false,
    } || {
      type: "DATA",
      payload: [],
    }||{
        type:"ERROR",
        payload:"error"
    }||{
        type:"SHOW_MESSAGE",
        payload:"message"
    }

  it("testing", () => {
    expect(reducerFunc(initialState, action)).toEqual({
      inputAnswer: "answer",
      loading: false,
      data: [{name:"deepak"}],
      error:"error",
      message:"message"
    });
  });
});
