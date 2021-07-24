import React, { useState } from "react";
import { Button } from "../core-components/Button";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import { buyStrategy } from "../redux/actions/mainCategoryActions";

export function SupportScreen(props) {
  //load mainCategoryCollectionData from database
  //put it into state
  //pass state to store

  var storageRef = firebase.storage().ref();

  storageRef
    .child("Bilder/Supportbild/group-2351896_1280.jpg")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("firstImage");
      img.src = url;
    })
    .catch(function (error) {});

  return (
    <div className="screen">
      <img id="firstImage" alt="landscape" height="120" width="120" />
      <br></br>
      <Link to="/mainCategory">
        <Button id="supportButton" text="Ich brauche Unterstützung"></Button>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // buyStrategy: (project) => dispatch(buyStrategy(project)),
  };
};

export default connect(null, mapDispatchToProps)(SupportScreen);
