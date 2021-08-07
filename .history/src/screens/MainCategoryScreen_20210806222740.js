import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "../core-components/Button";
import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  takeMotivation,
  takeStrategy,
} from "../redux/actions/mainCategoryActions";
import {useQuery} from "react-query"

async function fetchImageStrategyUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageStrategyUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageStrategyUrl(ref), // fetcher
    {suspense: true} // options
  )
  return data
}

async function fetchImageMotivationUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageMotivationUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageMotivationUrl(ref), // fetcher
    {suspense: true} // options
  )
  return data
}
export function MainCategoryScreen(props) {


      const urlStrategy = useImageStrategyUrl("Strategiebild/chess-316658_1280.jpg");
      const urlMotivation = useImageMotivationUrl("Bilder/Motivationsbild/sport-1412163_1920.jpg");
 
  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>
        Sehr gerne :) <br></br>
        Welche Art von Unterstützung brauchst du?
      </label>
      <br></br>
      <br></br>
      <img id="firstImage" alt="landscape" height="72" width="109" src={urlStrategy}/>
      <br></br>
      <Link to="/subCategory">
        <Button text="Strategien" function={props.takeStrategy}></Button>
      </Link>
      <br></br>
      <br></br>
      <img id="secondImage" alt="landscape" height="71" width="109" src={urlMotivation}/>
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
