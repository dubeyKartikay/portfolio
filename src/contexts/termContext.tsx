import {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import { termlistInitState,termlistReducer, TTermDispatch, TTermList } from "../utils/termList";
type TTermContext = {
  termlist: TTermList,
  termDispatch: Dispatch<TTermDispatch>
}
export const TermContext = createContext<TTermContext|null>(null)
export default function TermContextProvider(props:PropsWithChildren){
  const [termlist,termDispatch] = useReducer(termlistReducer,termlistInitState);
  const termlistcontext:TTermContext = {termlist,termDispatch};
  return(
      <TermContext.Provider value={ termlistcontext }>
        {props.children}
      </TermContext.Provider>
  )
}
