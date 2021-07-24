import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainCategoryDecisionReducer from "./reducers/mainCategoryReducer";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

export default store;
