import { actionCreatorFactory, Action, AnyAction } from 'typescript-fsa';
import { Epic, combineEpics } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable-of-action';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { mergeMap, delay } from 'rxjs/operators';
import { AppState } from '..';

// actions
const ac = actionCreatorFactory('[---samples]');
const actions = {
  initialize: ac('initialize'),
  createCategory: ac<string>('createCategory'),
};
export const _sampleActions = actions;

// reducers
interface ISample {
  sample: string;
}

const initialState: ISample = {
  sample: '',
};

const reducers = reducerWithInitialState(initialState)
  .case(actions.initialize, (state, payload) => ({ ...state }))
  .case(actions.createCategory, (state, payload) => ({ ...state, sample: payload }));
export const sampleReducers = reducers;

// epics
const sampleEpic1: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(actions.initialize),
    delay(300),
    mergeMap(action => []),
  );

const sampleEpic2: Epic<AnyAction, Action<void>, AppState> = (action$, store) =>
  action$.pipe(
    ofAction(actions.initialize),
    delay(300),
    mergeMap(action => []),
  );

export const sampleEpics = combineEpics(sampleEpic1, sampleEpic2);
