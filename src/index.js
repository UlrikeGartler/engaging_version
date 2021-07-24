import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./redux/store";
import { createFirestoreInstance } from "redux-firestore";
import "./css/styles.css";
import reportWebVitals from "./other/reportWebVitals";



var config = {
  apiKey: "AIzaSyASeHrl1QRg7Emrf1l5tBKd8mwka3Jkk9Y",
  authDomain: "mojuny-54bad.firebaseapp.com",
  projectId: "mojuny-54bad",
  storageBucket: "mojuny-54bad.appspot.com",
  messagingSenderId: "334786459023",
  appId: "1:334786459023:web:a2d18b47b02d2b8a1287fa",
  measurementId: "G-8WDZB8F1BT",
};

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

ReactDOM.render(
  <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default firebase;
