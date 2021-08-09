import { Text } from "../core-components/Text.js";
import { Button  } from "../core-components/Button.js";
import React from "react";
import {  Link} from "react-router-dom";
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

export function GoodbyeScreen(props) {

  const url = useImageUrl("Bilder/Feierabendbild/feet-932346_1920.jpg")
  

  return (
    <div className="screen">
      <Text text="Schönen Feierabend, "> </Text>
      <Text text="Junior Developer!"> </Text>

      <img id="rest" alt="rest" height="100" width="120" src={url}/>
      <br></br>

      <Link to="/welcome">
        <Button text="Logout"></Button>
      </Link>
    </div>
  );
}
