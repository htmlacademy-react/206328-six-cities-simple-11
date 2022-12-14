import { userProcess, initialState } from './user-process';

describe('Reducer: UserProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION '})).toEqual(initialState);
  });
});
