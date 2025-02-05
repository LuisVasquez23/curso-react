import { types } from "../types/types";

const initialState = {
  logged: false,
  name: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, logged: true, user: action.payload };
    case types.logout:
      return { ...state, logged: false, user: null };
    default:
      return state;
  }
};
