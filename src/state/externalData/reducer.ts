import { thingAPITypes } from "./types";

export type externalDataState = {
  thingAPIState: thingAPITypes;
  data: any;
};

const initialState: externalDataState = {
  thingAPIState: thingAPITypes.INIT_THING_SEARCH,
  data: null,
};

export const externalDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case thingAPITypes.LOADING_THING_SEARCH: {
      return {
        thingAPIState: action.type,
      };
    }
    case thingAPITypes.FAILED_THING_SEARCH: {
      return {
        thingAPIState: action.type,
      };
    }
    case thingAPITypes.SUCCESS_THING_SEARCH: {
      return {
        thingAPIState: action.type,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
