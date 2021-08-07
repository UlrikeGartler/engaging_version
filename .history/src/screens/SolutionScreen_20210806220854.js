import { Button } from "../core-components/Button.js";
// import { Text as Text } from "../core-components/Text.jsx";
// import { SolutionTable as SolutionTable } from "../sub-components/SolutionTable.jsx";
import firebase from "firebase";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import {useQuery} from "react-query"

async function fetchImageUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageUrl(ref), // fetcher
    {suspense: true} // options
  )
  return data
}

export function SolutionScreen(props) {


  let input = "";
  var url = "";



  if (props.subCategoryDecision === 1) {
   input = "mainCategory/strategy/subCategory/ask/1";
   url  = useImageUrl("Bilder/Icons/Fragen/icon-1332777_1920.png");
  } else if (props.subCategoryDecision === 2) {
    input = "mainCategory/strategy/subCategory/code/codeSolutions";
    url  = useImageUrl("Bilder/Icons/Code/hexagon-2307350_1280.png") ;
  } else if (props.subCategoryDecision === 3) {
    input = "mainCategory/strategy/subCategory/concept/conceptSolutions";
    url  = useImageUrl("Bilder/Icons/Konzept/games-2399904_1920.png");
  } else if (props.subCategoryDecision === 4) {
    input = "mainCategory/strategy/subCategory/error/solutions";
    url = useImageUrl("Bilder/Icons/Error/rejected-2858656_1920.png");
  } else if (props.subCategoryDecision === 5) {
    input = "mainCategory/strategy/subCategory/general/generalSolutions";
    url = useImageUrl("Bilder/Icons/Lernen/book-308048_1280.png");
  } else if (props.subCategoryDecision === 6) {
    input = "mainCategory/strategy/subCategory/learn/learningSolutions";
    url = useImageUrl("Bilder/Icons/Strategie/paper-1976101_1280.png");
  } else if (props.subCategoryDecision === 7) {
    input =
      "mainCategory/motivation/subCategory/concentration/concentrationSolutions";
    url = useImageUrl("Bilder/Icons/Konzentration/crosshair-467258_1280.png");
  } else if (props.subCategoryDecision === 8) {
    input = "mainCategory/motivation/subCategory/stress/stressSolutions";
   url = useImageUrl("Bilder/Icons/Stress/pain-head-4935624_1920.png");
  } else if (props.subCategoryDecision === 9) {
    input =
      "mainCategory/motivation/subCategory/motivation/motivationSolutions";
    url = useImageUrl("Bilder/Icons/Motivation/emotion-41728_1280.png");
  } else {
    input = "mainCategory/motivation/subCategory/general/generalSolutions";
    url = useImageUrl("Bilder/Icons/Ernst/man-4484226_1280.png");
  }

  const [solutions, setSolutions] = useState([]);

  const db = firebase.firestore();

  useEffect(()=> {
    db.collection(input) 
    .get()
    .then(function (querySnapshot) {
      const items = [];
      querySnapshot.forEach(function (doc) {
        items.push(doc.data());
      });
      setSolutions(items);
    });
  }, []);

  

  return (
    <div className="screen">
      <h1>
        <img id="id" alt="test" height="50" width="50" src={url}/>
        Solutions
      </h1>

      {/* <Link to="/praise"> */}
      {solutions.map((solutions) => (
        <div key={solutions.id}>
          <Link to="/praise">
            <Button text={solutions.solution}></Button>
          </Link>
        </div>
      ))}
      {/* </Link> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

export default connect(mapStateToProps, null)(SolutionScreen);
