import { Text } from "../core-components/Text.js";
import { Button  } from "../core-components/Button.js";
import React from "react";
import {  Link} from "react-router-dom";
import firebase from "firebase";

export function GoodbyeScreen(props) {
  //storageReference
  var storageRef = firebase.storage().ref("Bilder/Feierabendbild/feet-932346_1920.jpg");

  storageRef
    //.child()
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("rest");
      img.src = url;
    })
    .catch(function (error) {});

  return (
    <div className="screen">
      <Text text="Schönen Feierabend, "> </Text>
      <Text text="Junior Developer!"> </Text>

      <img id="rest" alt="rest" height="100" width="100" />
      <br></br>

      <Link to="/welcome">
        <Button text="Logout"></Button>
      </Link>
    </div>
  );
}
