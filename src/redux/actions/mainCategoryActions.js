import { STRATEGY } from "./mainCategoryTypes";
import { MOTIVATION } from "./mainCategoryTypes";

//ACTION CREATORS mainCategorDecision
export const takeStrategy = () => {
  return {
    type: STRATEGY,
  };
};

export const takeMotivation = () => {
  return {
    type: MOTIVATION,
  };
};
