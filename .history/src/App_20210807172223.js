//import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./css/styles.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { DecisionScreen } from "./screens/DecisionScreen";
import MainCategoryScreen from "./screens/MainCategoryScreen";
import SubCategoryScreen from "./screens/SubCategoryScreen";
import { BrowserRouter, Route } from "react-router-dom";
import { SupportScreen } from "./screens/SupportScreen";
import SolutionScreen from "./screens/SolutionScreen";
import { PraiseScreen } from "./screens/PraiseScreen";
import { GoodbyeScreen } from "./screens/GoodbyeScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import {BounceLoader, BarLoader, BeatLoader} from "react-spinners";
import { css } from '@emotion/core';

const loaderCSS = css`
margin-left: auto;
margin-right: auto;
`

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Suspense fallback={<BeatLoader css={loaderCSS} size={18}></BeatLoader>}>
              <Route path="/welcome" exact strict component={WelcomeScreen} />
              <Route path="/support" exact strict component={SupportScreen} />
              <Route
                path="/mainCategory"
                exact
                strict
                component={MainCategoryScreen}
              />
              <Route
                path="/subCategory"
                exact
                strict
                component={SubCategoryScreen}
              />
              <Route path="/solution" exact strict component={SolutionScreen} />
              <Route path="/praise" exact strict component={PraiseScreen} />
              <Route path="/decision" exact strict component={DecisionScreen} />
              <Route path="/goodbye" exact strict component={GoodbyeScreen} />
            </Suspense>
          </div>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
