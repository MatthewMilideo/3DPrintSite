import axios from "axios";
import { get } from "../helpers";
import { RootState } from "../";
import { AppThunk } from "../store";
import { thingAPITypes } from "./types";
//import { THING_KEY } from "../../config";

export const searchLoading = {
  type: thingAPITypes.LOADING_THING_SEARCH,
  payload: null,
};

export const searchFailed = {
  type: thingAPITypes.FAILED_THING_SEARCH,
  payload: null,
};

export function searchSuccess(data: any) {
  return {
    type: thingAPITypes.SUCCESS_THING_SEARCH,
    payload: data,
  };
}

export const search = (term: string): AppThunk => async (dispatch: any) => {
  dispatch(searchLoading);

  get(`https://api.thingiverse.com/search`, {
   // access_token: THING_KEY,
    term: term,
  })
    .then((res) => {
      dispatch(searchSuccess(res));
    })
    .catch((error) => {
      dispatch(searchFailed);
    });
};
