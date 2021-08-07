import { Button } from "../core-components/Button.js";
import { Text } from "../core-components/Text.js";
import React from "react";
import {  Link } from "react-router-dom";
import firebase from "firebase";
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

export function PraiseScreen(props) {

  const url = useImageUrl("Bilder/Lobbild/award-5572089_1280.png")
  

  return (
    <div className="screen">
      <Text text="Gutes Gelingen beim Ausprobieren deiner Lösungsmöglichkeit!"></Text>
      {/* <Text text="______________"></Text> */}
      <br></br>
      <img id="praise" alt="praise" height="70" width="50" src={url}/>
      <br></br>
      <Text text="Toll, dass du dich für eine Handlungsoption entschieden hast :)"></Text>
      <Link to="/decision">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
