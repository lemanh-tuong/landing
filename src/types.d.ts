import * as React from 'react';
import { ThunkAction as _ThunkAction } from 'redux-thunk';
import { ActionTypes } from 'utils/functions/reduxActions';
import { Reducers } from './configureStore';

declare global {
  declare type AppState = Reducers;
  declare type RootState = Reducers;
  declare type GetState = () => AppState;
  declare type ThunkAction<TAction> =
    | _ThunkAction<void, AppState, unknown, ActionTypes<TAction>>
    | Promise<_ThunkAction<Promise<void>, AppState, unknown, ActionTypes<TAction>>>;
  declare type Connect<TTypeOfMapStateToProps, TTypeOfMapDispatchToProps> = ReturnType<TTypeOfMapStateToProps> & TTypeOfMapDispatchToProps;

  declare type ValueOf<T> = T[keyof T];

  declare type Timeout = NodeJS.Timeout;
  
  declare interface ReducerState<TData> {
    status?: ReducerStatus;
    message?: string;
    data: TData;
    [key: string]: any;
  }
  declare interface PropsComponent {
    children?: React.ReactNode,
    className?: string;
    style?: React.CSSProperties
  }
}
