import { requestType, successType, failureType } from "fredux";
import { SAVE_CLIENT } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  saveClient: {
    saving: false,
    clientSaved: {},
  },
};

export function saving(state=initialState.saveClient.saving, { type }) {
  switch(type){
    case requestType(SAVE_CLIENT):
      return true;
    case successType(SAVE_CLIENT):
      return false;
    case failureType(SAVE_CLIENT):
      return false;
    default:
      return state;
  }
}

export function clientSaved(state=initialState.saveClient.clientSaved, { type, payload }) {
  switch(type){
    case requestType(SAVE_CLIENT):
      return state;
    case successType(SAVE_CLIENT):
      return payload.response;
    case failureType(SAVE_CLIENT):
      return state;
    default:
      return state;
  }
}

const getSaveClientState = (state) => state.clients.saveClient;

export const getSaving = state => getSaveClientState(state).saving;
export const getClientSaved = state => getSaveClientState(state).clientSaved;

export default combineReducers({
  saving,
  clientSaved
});
