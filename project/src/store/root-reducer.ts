import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './const';
import {userProcess} from './user-process/user-process';
import { reducer } from './reducer';

export const rootReducer = combineReducers({
  [NameSpace.Data]: reducer,
  [NameSpace.User]: userProcess.reducer,
});
