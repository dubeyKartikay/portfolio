import { log } from "console";
import { Dispatch, ReactNode, Reducer, ReducerState } from "react";
export type TTermList = Array<ReactNode>;
export type TTermDispatch = {
  action: string;
  arguments: null | ReactNode;
};
export const termlistInitState: TTermList = [];
export const termlistReducer: Reducer<TTermList, TTermDispatch> = (
  state: TTermList,
  action: TTermDispatch,
) => {
  log(action);
  return state;
};
