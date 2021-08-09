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

function useImageAskUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

async function fetchImageCodeUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageCodeUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageCodeUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

async function fetchImageConceptUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageConceptUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageConceptUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

async function fetchImageErrorUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageErrorUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageErrorUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

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
  console.log(data);
  return data
}

async function fetchImageLearnUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageLearnUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageLearnUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

async function fetchImageConcentrationUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageConcentrationUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageConcentrationUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

async function fetchImageStressUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageStressUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageStressUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
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
  console.log(data);
  return data
}

async function fetchImageGeneralUrl(ref) {
  const storageRef = firebase.storage().ref(ref);
  const url = await storageRef.getDownloadURL()
  return url
}

function useImageGeneralUrl(ref) {
  const {data} = useQuery(
    ref, // key
    () => fetchImageGeneralUrl(ref), // fetcher
    {suspense: true} // options
  )
  console.log(data);
  return data
}

export function SubCategoryScreen(props) {
  console.log(props.mainCategoryDecision);

  const askUrl = useImageAskUrl("Bilder/Icons/Fragen/icon-1332777_1920.png");
  const codeUrl = useImageCodeUrl("Bilder/Icons/Code/hexagon-2307350_1280.png");
  const conceptUrl = useImageConceptUrl("Bilder/Icons/Konzept/games-2399904_1920.png");
  const errorUrl = useImageErrorUrl("Bilder/Icons/Error/rejected-2858656_1920.png");
  const strategyUrl = useImageStrategyUrl("Bilder/Icons/Strategie/paper-1976101_1280.png");
  const learnUrl = useImageLearnUrl("Bilder/Icons/Lernen/book-308048_1280.png");
  const concentrationUrl = useImageConcentrationUrl("Bilder/Icons/Konzentration/crosshair-467258_1280.png");
  const stressUrl = useImageStressUrl("Bilder/Icons/Stress/pain-head-4935624_1920.png");
  const motivationUrl = useImageMotivationUrl("Bilder/Icons/Motivation/emotion-41728_1280.png");
  const generalUrl = useImageGeneralUrl("Bilder/Icons/Ernst/man-4484226_1280.png");


  

  const renderAuthButton = () => {
    if (props.mainCategoryDecision === 1) {
      return (
        <div>
          <img id="ask" alt="question" height="50" width="50" src={askUrl}/>
          <br></br>
          <Button
            text="Ich weiß nicht, ob ich einen Senior fragen soll."
            function={props.clickOnASK}
          ></Button>
          <br></br>
          <img id="code" alt="code" height="50" width="50" src={codeUrl}/>
          <br></br>
          <Button
            text="Ich weiß nicht, wie ich weiterprogrammieren soll."
            function={props.clickOnCODE}
          ></Button>
          <br></br>
          <img id="concept" alt="concept" height="50" width="50" src={conceptUrl}/>
          <br></br>
          <Button
            text="Ich kenne so viele Konzepte nicht."
            function={props.clickOnCONCEPT}
          ></Button>
          <br></br>
          <img id="error" alt="error" height="50" width="50" src={errorUrl}/>
          <br></br>
          <Button
            text="Ich finde die Lösung für den Error nicht."
            function={props.clickOnERROR}
          ></Button>
          <br></br>
          <img id="strategy" alt="error" height="50" width="50" src={strategyUrl}/>
          <br></br>
          <Button
            text="Ich brauche generell Coding-Strategien."
            function={props.clickOnGENERAL}
          ></Button>
          <br></br>
          <img id="learn" alt="error" height="50" width="50" src={learnUrl}/>
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
          <img id="concentration" alt="error" height="50" width="50" src={concentrationUrl}/>
          <br></br>
          <Button
            text="Ich kann mich nicht konzentrieren."
            function={props.clickOnConcentration}
          ></Button>
          <br></br>
          <img id="stress" alt="error" height="60" width="50" src={stressUrl}/>
          <br></br>
          <Button
            text="Ich bin gestresst."
            function={props.clickOnStress}
          ></Button>
          <br></br>
          <img id="motivation" alt="error" height="50" width="50" src={motivationUrl}/>
          <br></br>
          <Button
            text="Ich kann mich nicht motivieren."
            function={props.clickOnMotivation}
          ></Button>
          <br></br>
          <img id="serious" alt="error" height="50" width="50" src={generalUrl}/>
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
     
      <label>Bitte konkretisiere deinen Unterstützungsbereich: </label>
      <br></br>
      <br></br>
      <Link to="/solution">{renderAuthButton()}</Link>
     
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
