import {TO_CAPS} from "./Action";
import ListData from "./ListData";


const initalState = {text:"Reducer inital State ",texts:[ListData[0]]}

export  const Reducer = (state = initalState, action) => {

  const targetState={};//similar to initi
  Object.assign(targetState,state);//creates a new object
  // console.warn("targetState"+targetState.text);

  if(action==TO_CAPS){
    targetState.texts.push(ListData[0]);
    return targetState;
  }

      return state;
};
