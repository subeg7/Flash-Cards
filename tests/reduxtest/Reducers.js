import {TO_CAPS} from "./Action";
const initalState = {text:"Reducer inital State "}
 export  const Reducer = (state = initalState, action) => {

  // const newDuplicateState = Object.assign(state);//creates a new object
console.warn("At reducer");
const transitionState = {text:"redux success "}

    // return transitionState;
    console.warn("After reducer");

  // switch (action) {
  //   case TO_CAPS:{
  if(action==TO_CAPS){
    return transitionState;
  }
  //       // newDuplicateState.text="CAPITALIZATION SUCCESS";
  //       console.warn("Reducer:->"+state.text);
  //       return state;
  //       console.warn("Reducer:->"+state.text);
  //
  //   }else{
  //     console.warn("returning state from else")
      return state;
};
  //       }
  //   default: return state;
  // }
// };
