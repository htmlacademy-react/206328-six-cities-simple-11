import {NameSpace} from '../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../constants';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
