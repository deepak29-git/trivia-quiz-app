import { useEffect, useReducer, useState } from "react";
import { getData } from "../../Api-data/data";
import { reducerFunc } from "../../Reducer/reducerFun";
import { InitialState } from "./quiz-types";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import "../Quiz/Quiz.css";
export const Quiz = () => {
  const [validate, setValidate] = useState(false);
  const [currentQuestion,setCurrentQuestion]=useState("")
  const initialState: InitialState = {
    inputAnswer: "",
    loading: false,
    data: [],
    error: "",
    message: "",
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const { inputAnswer, loading, data, error, message } = state;

  const submitHandler = () => {
    if (!inputAnswer) {
      setValidate(true);
      return;
    }
    const answer = data.map((quiz: any) => quiz.correct_answer).toString();
    if (inputAnswer === answer) {
      dispatch({ type: "SHOW_MESSAGE", payload: "Correct Answer" });
    } else {
      dispatch({ type: "SHOW_MESSAGE", payload: "Wrong Answer" });
    }
    getData(dispatch);
    setCurrentQuestion(data)
  };


  const backBtnHandler=()=>{
    dispatch({type:"DATA",payload:currentQuestion})
  }

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {data &&
        data.map(({ question }: {  question: string }) => (
          <div key={question}>
            <Typography className="question">
              <strong>Question:</strong> {question} ?
            </Typography>
          </div>
        ))}
      <FormControl>
        <TextField
          error={validate ? true : false}
          label="Enter answer"
          id={validate ? "outlined-error-helper-text" : "filled-basic"}
          helperText={validate && "Please Enter Answer"}
          sx={{ marginTop: 3 }}
          variant="filled"
          onChange={(e) => {
            dispatch({ type: "INPUT_ANSWER", payload: e.target.value });
            setValidate(false);
            dispatch({ type: "SHOW_MESSAGE", payload: "" });
          }}
          type="text"
        />
        <Button
          sx={{ marginTop: 3 }}
          variant="contained"
          onClick={submitHandler}
        >
          Submit
        </Button>
        <Button
          sx={{ marginTop: 3 }}
          variant="outlined"
          onClick={backBtnHandler}
        >
          Back
        </Button>
        <h4 style={{ color: message === "Correct Answer" ? "#84cc16" : "red" }}>
          {message}
        </h4>
      </FormControl>
      {error && <h2>{error}</h2>}
    </div>
  );
};
