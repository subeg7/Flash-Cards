import {ADD_ITEM} from "./Action";
import {DEL_ITEM} from "./Action";
import ListData from "./ListData";


const initalState = {text:"peakIndex:0",
                     texts:[ListData[0]],
                     peakIndex:0
                    }

export  const Reducer = (state = initalState, action) => {

  const targetState={};//similar to initi
  Object.assign(targetState,state);//duplicates state without mutating it.

  if(action==ADD_ITEM){
    targetState.text="peakIndex:"+ ++targetState.peakIndex;
    targetState.texts.push(ListData[targetState.peakIndex]);
    return targetState;
  }else if(action.type == DEL_ITEM.type){
    targetState.texts.splice(--action.id, 1);
    return targetState;
  }

  return state;
};
