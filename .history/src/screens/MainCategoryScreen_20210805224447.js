import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  takeMotivation,
  takeStrategy,
} from "../redux/actions/mainCategoryActions";

export function MainCategoryScreen(props) {
  console.log(props);

  var storageRef = firebase.storage().ref();

  useEffect(()=> {
    storageRef
    .child("Bilder/Strategiebild/chess-316658_1280.jpg")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("firstImage");
      img.src = url;
    })
    .catch(function (error) {});
  }, []);

  
useEffect(()=> {
  storageRef
  .child("Bilder/Motivationsbild/sport-1412163_1920.jpg")
  .getDownloadURL()
  .then(function (url) {
    var img = document.getElementById("secondImage");
    img.src = url;
  })
  .catch(function (error) {});
}, []);
  

  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </label>
      <br></br>
      <br></br>
      <img id="firstImage" alt="landscape" height="72" width="109" />
      <br></br>
      <Link to="/subCategory">
        <Button text="Strategien" function={props.takeStrategy}></Button>
      </Link>
      <br></br>
      <br></br>
      <img id="secondImage" alt="landscape" height="71" width="109" />
      <br></br>
      <Link to="/subCategory">
        <Button text="Motivation" function={props.takeMotivation}></Button>
      </Link>
    </div>
  );
}

//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    takeStrategy: () => dispatch(takeStrategy()),
    takeMotivation: () => dispatch(takeMotivation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategoryScreen);
