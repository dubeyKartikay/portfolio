import { TTermState } from "../components/Terminal/TerminalEngine/TerminalEngine";

export function TermStateReducer (state:TTermState, action: string){
  console.log(action);
  return state;
}
