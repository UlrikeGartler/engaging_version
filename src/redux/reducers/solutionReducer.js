import { SOLUTION_1, SOLUTION_2 } from "../actions/solutionTypes";

//solutionDecision STATE
const solutionDecisionState = {
  solutionDecision: 0,
};

//mainCategoryDesicion REDUCER
const solutionDecisionReducer = (state = solutionDecisionState, action) => {
  switch (action.type) {
    case SOLUTION_1:
      return {
        ...state,
        solutionDecision: 1,
      };
    case SOLUTION_2:
      return {
        ...state,
        solutionDecision: 2,
      };
    default:
      return state;
  }
};

export default solutionDecisionReducer;
