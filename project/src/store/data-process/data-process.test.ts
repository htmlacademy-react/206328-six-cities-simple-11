import { loadComments, loadNearby, loadOffers } from '../action';
import { makeFakeOffers ,makeFakeComments } from '../mocks';
import { dataProcess, initialState } from './data-process';

const offers = makeFakeOffers();
const comments = makeFakeComments();

describe('Reducer: DataProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, { type: 'UNKNOWN_ACTION '})).toEqual(initialState);
  });

  it('should update state by load hotels', () => {
    const state = initialState;
    expect(dataProcess.reducer(state, {type: loadOffers, payload: offers }))
      .toEqual({...state, offers });
  });

  it('should update state by load comments', () => {
    const state = initialState;
    expect(dataProcess.reducer(state, {type: loadComments, payload: comments }))
      .toEqual({...state, comments });
  });

  it('should update state by load nearby', () => {
    const state = initialState;
    expect(dataProcess.reducer(state, {type: loadNearby, payload: offers }))
      .toEqual({...state, nearby: offers });
  });
});
