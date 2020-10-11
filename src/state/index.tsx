import { combineReducers } from "redux";
import { externalDataReducer } from "./externalData/reducer";

export const rootReducer = combineReducers({
 // externalData: externalDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
