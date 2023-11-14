import { UserInput } from "./UserInput/UserInput"
import { TerminalPrompt } from "./TerminalPrompt/TerminalPrompt"
import { TerminalOut } from "./TerminalOut/TerminalOut"
import { useState } from "react"
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
  
  return (
    <div>

    </div>
  )
}
