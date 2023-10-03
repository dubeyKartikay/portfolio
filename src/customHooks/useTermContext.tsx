import { TermContext } from "../contexts/termContext";
import { useContext } from "react";
export default function useTermContext(){
  const termContext = useContext(TermContext);
  if(!termContext){
    throw Error("Context must be used in a provider");
  }
  return termContext;

}
