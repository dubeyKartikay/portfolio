import { TerminalEngine } from "./TerminalEngine/TerminalEngine"
export const Terminal = () => {
  return (
    <div className="w-[900px] h-[600px] min-w-[420px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[600px] bg-terminalbg rounded-2xl">
     <div className="w-full h-8 bg-terminaltitle rounded-t-2xl" /> 
      <TerminalEngine/>
    </div>
  )
}
