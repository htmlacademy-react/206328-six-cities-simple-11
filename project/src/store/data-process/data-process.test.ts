import { dataProcess, initialState } from './data-process';

describe('Reducer: DataProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, { type: 'UNKNOWN_ACTION '})).toEqual(initialState);
  });
});
