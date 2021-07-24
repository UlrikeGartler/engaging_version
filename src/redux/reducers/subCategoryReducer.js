import {
  clickASK,
  clickCODE,
  clickConcentration,
  clickCONCEPT,
  clickERROR,
  clickGENERAL,
  clickLEARN,
  clickStress,
  clickMotivation,
  clickGeneral,
} from "../actions/subCategoryTypes";

//subCategoryDecision STATE
const subCategoryDecisionState = {
  subCategoryDecision: 0,
};

const subCategoryDecisionReducer = (
  state = subCategoryDecisionState,
  action
) => {
  switch (action.type) {
    //strategy
    case clickASK:
      return {
        ...state,
        subCategoryDecision: 1,
      };
    case clickCODE:
      return {
        ...state,
        subCategoryDecision: 2,
      };
    case clickCONCEPT:
      return {
        ...state,
        subCategoryDecision: 3,
      };
    case clickERROR:
      return {
        ...state,
        subCategoryDecision: 4,
      };
    case clickGENERAL:
      return {
        ...state,
        subCategoryDecision: 5,
      };
    case clickLEARN:
      return {
        ...state,
        subCategoryDecision: 6,
      };

    //motivation
    case clickConcentration:
      return {
        ...state,
        subCategoryDecision: 7,
      };
    case clickStress:
      return {
        ...state,
        subCategoryDecision: 8,
      };

    case clickMotivation:
      return {
        ...state,
        subCategoryDecision: 9,
      };
    case clickGeneral:
      return {
        ...state,
        subCategoryDecision: 10,
      };
    default:
      return state;
  }
};

export default subCategoryDecisionReducer;
