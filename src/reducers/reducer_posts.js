import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("action.type = FETCH_POSTS so WTF?");
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;

  }
}
