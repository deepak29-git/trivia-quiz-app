export type QuizAction =
  | {
      type: "SHOW_MESSAGE";
      payload: string;
    }
  | {
      type: "INPUT_ANSWER";
      payload: string;
    }
  | {
      type: "LOADING";
      payload: boolean;
    }
  | {
      type: "DATA";
      payload: any;
    }
  | {
      type: "ERROR";
      payload: string;
    };

export type InitialState = {
  inputAnswer: string;
  loading: boolean;
  data: any;
  error: string;
  message: string;
};
