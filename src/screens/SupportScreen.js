import React, {  } from "react";
import { Button } from "../core-components/Button";
import {  Link} from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";


export function SupportScreen(props) {
  //load mainCategoryCollectionData from database
  //put it into state
  //pass state to store

  var storage = firebase.storage();

  var storageRef = storage.ref();

  storageRef
    .child("Bilder/Supportbild/group-2351896_1280evensmaller.jpg")
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
