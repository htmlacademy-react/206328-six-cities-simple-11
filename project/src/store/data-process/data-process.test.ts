import { loadComments, loadOffers } from '../action';
import { makeFakeOffers } from '../mocks';
import { dataProcess, initialState } from './data-process';

const offers = makeFakeOffers();

describe('Reducer: DataProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, { type: 'UNKNOWN_ACTION '})).toEqual(initialState);
  });

  it('should update questions by load hotels', () => {
    const state = initialState;
    expect(dataProcess.reducer(state, {type: loadOffers, payload: offers }))
      .toEqual({...state, offers });
  });

  it('should update questions by load comments', () => {
    const state = initialState;
    expect(dataProcess.reducer(state, {type: loadComments, payload: offers }))
      .toEqual({...state, offers });
  });

});
