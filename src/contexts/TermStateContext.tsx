import { createContext, useReducer } from "react";
import { TTermState } from "../components/Terminal/TerminalEngine/TerminalEngine";
import { TermStateReducer } from "../utils/TermState";
const initState : TTermState ={
  pwd: "/home/kartikayd/",
  TermHist: []
} 
type TTermStateContext = {
  termState : TTermState,
  dispatch : React.Dispatch<string>|undefined 
}
const initContext:TTermStateContext = {
  termState : initState,
  dispatch : undefined
}
export const TermStateContext = createContext<TTermStateContext>(initContext);

export  const TermStateContexProvider : React.FC<{ children: React.ReactNode }> = ({children})=>{
  const [termState,dispatch] = useReducer(TermStateReducer,initState);
  return(
  <TermStateContext.Provider value={{termState,dispatch}}>
  {children}
  </TermStateContext.Provider>
  )
}
