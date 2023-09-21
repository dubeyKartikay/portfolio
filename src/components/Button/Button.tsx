import { MouseEventHandler } from "react";
type ButtonProps = {
  type: "link" | "btn";
  text: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string
};
export const Button = (props: ButtonProps) => {
  const innerButtion = (
    <div className="bg-buttons text-xl px-16 py-3 max-w-fit rounded-2xl transition-all hover:contrast-200 hover:scale-110 hover:shadow-xl">
      {props.text}
    </div>
  );

  return (
    props.type == "link" ? <a className={props.className} href={props.href}>{innerButtion}</a> : <button className={props.className} onClick={props.onClick} > {innerButtion} </button>
    
  );
};
