export type QuizAction =
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
    }
  | {
      type: "SHOW_MESSAGE";
      payload: string;
    };

export type InitialState = {
  inputAnswer: string;
  loading: boolean;
  data: any;
  error: string;
  message: string;
};
