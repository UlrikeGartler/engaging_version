import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { } from "react";
import { Button } from "../core-components/Button";
import {
  clickOnASK,
  clickOnCODE,
  clickOnCONCEPT,
  clickOnERROR,
  clickOnGENERAL,
  clickOnLEARN,
  clickOnConcentration,
  clickOnGeneral,
  clickOnMotivation,
  clickOnStress,
} from "../redux/actions/subCategoryActions";
import firebase from "firebase";
import { useQuery } from "react-query"

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


export function SubCategoryScreen(props) {
  console.log(props.mainCategoryDecision);

  const url = useImageUrl("Bilder/Icons");


 /*  //storageReference
  var storageRef = firebase.storage().ref("Bilder/Icons");
  //Strategie
  storageRef
    .child("Code/hexagon-2307350_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("code");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Fragen/icon-1332777_1920.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("ask");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Konzept/games-2399904_1920.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("concept");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Error/rejected-2858656_1920.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("error");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Lernen/book-308048_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("learn");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Strategie/paper-1976101_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("strategy");
      img.src = url;
    })
    .catch(function (error) { });




    
  //Motivation
  storageRef
    .child("Konzentration/crosshair-467258_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("concentration");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Stress/pain-head-4935624_1920.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("stress");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Motivation/emotion-41728_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("motivation");
      img.src = url;
    })
    .catch(function (error) { });

  storageRef
    .child("Ernst/man-4484226_1280.png")
    .getDownloadURL()
    .then(function (url) {
      var img = document.getElementById("serious");
      img.src = url;
    })
    .catch(function (error) { });
 */
  const renderAuthButton = () => {
    if (props.mainCategoryDecision === 1) {
      return (
        <div>
          <img id="ask" alt="question" height="50" width="50" />
          <br></br>
          <Button
            text="Ich weiß nicht, ob ich einen Senior fragen soll."
            function={props.clickOnASK}
          ></Button>
          <br></br>
          <img id="code" alt="code" height="50" width="50" />
          <br></br>
          <Button
            text="Ich weiß nicht, wie ich weiterprogrammieren soll."
            function={props.clickOnCODE}
          ></Button>
          <br></br>
          <img id="concept" alt="concept" height="50" width="50" />
          <br></br>
          <Button
            text="Ich kenne so viele Konzepte nicht."
            function={props.clickOnCONCEPT}
          ></Button>
          <br></br>
          <img id="error" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich finde die Lösung für den Error nicht."
            function={props.clickOnERROR}
          ></Button>
          <br></br>
          <img id="strategy" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich brauche generell Coding-Strategien."
            function={props.clickOnGENERAL}
          ></Button>
          <br></br>
          <img id="learn" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich brauche Ideen für Lernstrategien."
            function={props.clickOnLEARN}
          ></Button>
        </div>
      );
    } else {
      return (
        <div>
          <img id="concentration" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich kann mich nicht konzentrieren."
            function={props.clickOnConcentration}
          ></Button>
          <br></br>
          <img id="stress" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich bin gestresst."
            function={props.clickOnStress}
          ></Button>
          <br></br>
          <img id="motivation" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich kann mich nicht motivieren."
            function={props.clickOnMotivation}
          ></Button>
          <br></br>
          <img id="serious" alt="error" height="50" width="50" />
          <br></br>
          <Button
            text="Ich nehme die Dinge zu ernst."
            function={props.clickOnGeneral}
          ></Button>
        </div>
      );
    }
  };

  return (
    <div className="screen">
      {/* <h2>Decision- {props.mainCategoryDecision}</h2> */}
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
      {/* <Link to="/solution">
        <button onClick={props.clickOnASK}>Ask</button>
      </Link>
      <Link to="/solution">
        <button onClick={props.clickOnCODE}>Code</button>
      </Link> */}
    </div>
  );
}
//global state from store
const mapStateToProps = (state) => {
  return {
    mainCategoryDecision: state.main.mainCategoryDecision,
    subCategoryDecision: state.sub.subCategoryDecision,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnASK: () => dispatch(clickOnASK()),
    clickOnCODE: () => dispatch(clickOnCODE()),
    clickOnCONCEPT: () => dispatch(clickOnCONCEPT()),
    clickOnERROR: () => dispatch(clickOnERROR()),
    clickOnGENERAL: () => dispatch(clickOnGENERAL()),
    clickOnLEARN: () => dispatch(clickOnLEARN()),
    clickOnConcentration: () => dispatch(clickOnConcentration()),
    clickOnStress: () => dispatch(clickOnStress()),
    clickOnMotivation: () => dispatch(clickOnMotivation()),
    clickOnGeneral: () => dispatch(clickOnGeneral()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryScreen);
