import {TO_CAPS} from "./Action";
const initalState = {text:"initial text state set in Reducer "}

 export  const Reducer = (state = initalState, action) => {
  console.warn("action revieved is:"+ action.type);

  switch (action) {
    case TO_CAPS:
      console.warn("action is recieved");
  }
  return state;
};
