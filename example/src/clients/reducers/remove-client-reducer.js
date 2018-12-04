import { requestType, successType, failureType } from "fredux";
import { REMOVE_CLIENT } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  removeClient: {
    removing: false,
    filesRemoved: 0,
  },
};

export function removing(state=initialState.removeClient.removing, { type }) {
  switch(type){
    case requestType(REMOVE_CLIENT):
      return true;
    case successType(REMOVE_CLIENT):
      return false;
    case failureType(REMOVE_CLIENT):
      return false;
    default:
      return state;
  }
}

export function filesRemoved(state=initialState.removeClient.filesRemoved, { type, payload }) {
  switch(type){
    case requestType(REMOVE_CLIENT):
      return state;
    case successType(REMOVE_CLIENT):
      return payload.filesRemoved;
    case failureType(REMOVE_CLIENT):
      return state;
    default:
      return state;
  }
}

const getRemoveClientState = (state) => state.clients.removeClient;

export const getRemoving = state => {
  return getRemoveClientState(state).removing;
}
export const getFilesRemoved = state => {
  return getRemoveClientState(state).filesRemoved;
}

export default combineReducers({
  removing,
  filesRemoved,
});
