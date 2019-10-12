import { Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { userActions } from './action-reducers';
import { CallHistoryMethodAction, replace } from 'connected-react-router';
import { EPath } from '../../types';
import { appStateSelector } from '../state-selector/objects/app-state';
import { UserService } from '../../services/user';
import { ApiError } from '../../models/error';
import Logger from '../../helpers/generals/logger';

const readUser: Epic<
  AnyAction,
  Action<void> | Action<Parameters<typeof userActions.read.done>[0]> | CallHistoryMethodAction,
  AppState
> = (action$, store) =>
  action$.pipe(
    ofAction(userActions.read.started),
    map(({ payload }) => {
      const stateSelector = appStateSelector(store.value);
      const uid = stateSelector.uid;
      return { payload, uid };
    }),
    mergeMap(async ({ payload, uid }) => {
      const res = await UserService.readUser(uid);
      return { payload, res };
    }),
    mergeMap(({ payload, res }) => {
      if (res instanceof ApiError) {
        return [];
      }
      if (!res) {
        // TODO: うーん、エラー画面に遷移？？？
        return [];
      }
      const user = res;
      Logger.log('user', user);
      return [replace(EPath.Home), userActions.read.done({ params: payload, result: { user } })];
    }),
  );

export const userEpics = combineEpics(readUser);