import { requestType, successType, failureType } from "fredux";
import { UPDATE_CLIENT } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  updateClient: {
    updating: false,
    filesUpdated: {},
  },
};

export function updating(state=initialState.updateClient.updating, { type }) {
  switch(type){
    case requestType(UPDATE_CLIENT):
      return true;
    case successType(UPDATE_CLIENT):
      return false;
    case failureType(UPDATE_CLIENT):
      return false;
    default:
      return state;
  }
}

export function filesUpdated(state=initialState.updateClient.filesUpdated, { type, payload }) {
  switch(type){
    case requestType(UPDATE_CLIENT):
      return state;
    case successType(UPDATE_CLIENT):
      return payload.filesUpdated;
    case failureType(UPDATE_CLIENT):
      return state;
    default:
      return state;
  }
}

const getUpdateClientState = (state) => state.clients.updateClient;

export const getUpdating = state => getUpdateClientState(state).updating;
export const getFilesUpdated = state => getUpdateClientState(state).filesupdated;

export default combineReducers({
  updating,
  filesUpdated,
});
