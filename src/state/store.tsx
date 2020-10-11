import { Store, createStore, applyMiddleware, Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState, rootReducer } from "./index";
import { ThunkAction } from "redux-thunk";
import thunk from "redux-thunk";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function configureStore(initialState?: RootState): Store<RootState> {
  /* eslint-disable no-underscore-dangle */

  /* eslint-enable */
  const store = createStore(
    rootReducer as any,
    initialState as any,
    composeWithDevTools(applyMiddleware(thunk))
  ) as Store<RootState>;
  return store;
}
