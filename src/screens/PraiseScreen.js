import { Button } from "../core-components/Button.js";
import { Text } from "../core-components/Text.js";
import React from "react";
import {  Link } from "react-router-dom";
import firebase from "firebase";

export function PraiseScreen(props) {
  //storageReference
  var storageRef = firebase.storage().ref("Bilder/Lobbild/award-5572089_1280.jpg");

  storageRef
    //.child()
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("praise");
      img.src = url;
    })
    .catch(function (error) {});

  return (
    <div className="screen">
      <Text text="Gutes Gelingen beim Ausprobieren deiner Lösungsmöglichkeit!"></Text>
      {/* <Text text="______________"></Text> */}
      <br></br>
      <img id="praise" alt="praise" height="70" width="50" />
      <br></br>
      <Text text="Toll, dass du dich für eine Handlungsoption entschieden hast :)"></Text>
      <Link to="/decision">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
