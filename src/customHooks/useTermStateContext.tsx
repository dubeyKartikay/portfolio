import { TermStateContext } from "../contexts/TermStateContext";
import { useContext } from "react";
export const useTermStateContext = ()=>{
  const termStateContext = useContext(TermStateContext);
  if(termStateContext===undefined){
    throw new Error ("TermStateContext must be used in a TermStateContext provider")
  }
  return termStateContext;
}

