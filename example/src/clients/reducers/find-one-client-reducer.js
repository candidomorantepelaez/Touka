import { requestType, successType, failureType } from "fredux";
import { FIND_ONE_CLIENT } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  findOneClient: {
    findingClient: false,
    client: {},
  },
};

export function findingClient(state = initialState.findOneClient.findingClient, { type }) {
  switch(type){
    case requestType(FIND_ONE_CLIENT):
      return true;
    case successType(FIND_ONE_CLIENT):
      return false;
    case failureType(FIND_ONE_CLIENT):
      return false;
    default:
      return state;
  }
}

export function client(state=initialState.findOneClient.client, { type, payload }) {
  switch(type){
    case requestType(FIND_ONE_CLIENT):
      return [];
    case successType(FIND_ONE_CLIENT):
      return payload.response;
    case failureType(FIND_ONE_CLIENT):
      return [];
    default:
      return state;
  }
}

const getFindOneClientState = (state) => state.clients.findOneClient;

export const getFindingClient = state => getFindOneClientState(state).findingClient;
export const getClients = state => getFindOneClientState(state).client;

export default combineReducers({
  findingClient,
  client,
});