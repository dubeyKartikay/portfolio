import { log } from "console";
import {  ReactNode, Reducer } from "react";
export type TTermState = 
{
  pwd : String,
 outList: Array<ReactNode>
}

export type TTermDispatch = {
  action: string;
  arguments: null | ReactNode;
};
export const termlistInitState: TTermState = {pwd:"~",outList: []};
export const termlistReducer: Reducer<TTermState, TTermDispatch> = (
  state: TTermState,
  action: TTermDispatch,
) => {
  log(action);
  return state;
};
