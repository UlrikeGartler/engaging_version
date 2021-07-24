import {
  clickASK,
  clickStress,
  clickConcentration,
  clickMotivation,
} from "./subCategoryTypes";
import { clickCODE } from "./subCategoryTypes";
import { clickCONCEPT } from "./subCategoryTypes";
import { clickERROR } from "./subCategoryTypes";
import { clickGENERAL } from "./subCategoryTypes";
import { clickGeneral } from "./subCategoryTypes";
import { clickLEARN } from "./subCategoryTypes";

//strategy
export const clickOnASK = () => {
  return {
    type: clickASK,
  };
};
export const clickOnCODE = () => {
  return {
    type: clickCODE,
  };
};
export const clickOnCONCEPT = () => {
  return {
    type: clickCONCEPT,
  };
};
export const clickOnERROR = () => {
  return {
    type: clickERROR,
  };
};
export const clickOnGENERAL = () => {
  return {
    type: clickGENERAL,
  };
};
export const clickOnLEARN = () => {
  return {
    type: clickLEARN,
  };
};

//motivation
export const clickOnConcentration = () => {
  return {
    type: clickConcentration,
  };
};
export const clickOnStress = () => {
  return {
    type: clickStress,
  };
};
export const clickOnMotivation = () => {
  return {
    type: clickMotivation,
  };
};
export const clickOnGeneral = () => {
  return {
    type: clickGeneral,
  };
};
