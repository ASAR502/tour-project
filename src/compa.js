import React from "react";
import { useContext } from "react";
import { Name, Gender } from "./context";
export default function Compa() {
  const fname = useContext(Name);
  const gender = useContext(Gender);
  return (
    <>
      <h1>it is components A</h1>
      <h2>
        my name is {fname} i am {gender}
      </h2>
    </>
  );
}
