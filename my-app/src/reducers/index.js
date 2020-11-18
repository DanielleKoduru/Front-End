import { ADD_USER } from "../actions/userActions";

const initialState = {
  potlucks: [],
  users: [],
  potluckItems: [],
  potluckGuests: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
