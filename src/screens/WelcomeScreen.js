import { Text} from "../core-components/Text";
import { Button  } from "../core-components/Button";
import React from "react";
import { Link } from "react-router-dom";
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

export function WelcomeScreen(props) {
  const url = useImageUrl("Bilder/Startbild/people-2591874_1920.jpg")

  return (
    <div className="screen">
      <Text text="Hallo, Junior Developer!"></Text>
      <Text text="Viel Spaß beim Arbeiten heute :)"></Text>
      <br></br>

      <img id="firstImage" alt="landscape" height="150" width="230" src={url} />
      <br></br>
      <br></br>

      <Link to="/support">
        <Button text="Weiter"></Button>
      </Link>
    </div>
  );
}
