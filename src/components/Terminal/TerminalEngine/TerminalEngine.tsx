import { UserInput } from "./UserInput/UserInput"
import { TerminalPrompt } from "./TerminalPrompt/TerminalPrompt"
import { TerminalOut } from "./TerminalOut/TerminalOut"
import { useTermStateContext } from "../../../customHooks/useTermStateContext"
export type TExchange = {
  prompt: typeof TerminalPrompt,
  input : typeof UserInput,
  output : typeof TerminalOut 
}
export type TTermHist = Array<TExchange>
export type TTermState = {
  pwd : string,
  TermHist : TTermHist
}
export  const TerminalEngine = ()=> {
  const termStateContext = useTermStateContext();
  return (
    <div>
      {termStateContext.termState.TermHist.map((ele)=>{
        return <>
          {ele.prompt}
          {ele.input}
          {ele.output}
        </>
      })} 
    </div>
  )
}
