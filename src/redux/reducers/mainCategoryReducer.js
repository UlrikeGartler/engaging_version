import { STRATEGY, MOTIVATION } from "../actions/mainCategoryTypes";

//STATES
//mainCategoryDecision STATE
const mainCategoryDecisionState = {
  mainCategoryDecision: 0,
};

//REDUCERS
//mainCategoryDesicion REDUCER
const mainCategoryDecisionReducer = (
  state = mainCategoryDecisionState,
  action
) => {
  switch (action.type) {
    case STRATEGY:
      return {
        ...state,
        mainCategoryDecision: 1,
      };
    case MOTIVATION:
      return {
        ...state,
        mainCategoryDecision: 2,
      };
    default:
      return state;
  }
};

export default mainCategoryDecisionReducer;
