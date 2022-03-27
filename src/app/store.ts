// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../page/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;



import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../models'

export const store = init({
  models,
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
