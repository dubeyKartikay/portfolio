type TerminalPromptProps = {
  pwd : string
}
export const TerminalPrompt = ( props:TerminalPromptProps) => {
  const {pwd} = props;
  return (
    <div className="block" >
      <div>
     <span className="text-terminaluser" > kartikayd </span> 
     <span className="text-editortext" >  </span> 
     <span className="text-terminalpwd" > {pwd} </span> 
    </div>
    <div className="flex" > 
      <span className="text-terminaluserinput" > ➜ </span> 
      </div>
    </div>
  )
}
