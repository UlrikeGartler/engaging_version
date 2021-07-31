import { Text} from "../core-components/Text";
import { Button  } from "../core-components/Button";
import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";



export function WelcomeScreen(props) {

  
  useEffect(() => {
    var image = new Image();
    var storage = firebase.storage();
    var storageRef = storage.ref("Bilder/Startbild/people-2591874_1920.jpg");
    
    storageRef
      //.child()
      .getDownloadURL()
      .then(function (url) {
        //var img = document.getElementById("firstImage");
        image = document.getElementById("firstImage");
        image.src = url;
      })
      .catch(function (error) { });
    
  })

  


   /* storageRef
    //.child()
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("firstImage");
      img.src = url;
    })
    .catch(function (error) {});   */

  

  return (
    <div className="screen">
      <Text text="Hallo, Junior Developer!"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>
      <br></br>

      <img id="firstImage"  alt="landscape" height="150" width="230" />
      <br></br>
      <br></br>

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
