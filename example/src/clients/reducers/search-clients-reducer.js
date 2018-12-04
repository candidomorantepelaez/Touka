import { requestType, successType, failureType } from "fredux";
import { SEARCH_CLIENTS } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  searchClients: {
    searchingClients: false,
    clients: [],
  },
};

export function searchingClients(state = initialState.searchClients.searchingClients, { type }) {
  switch(type){
    case requestType(SEARCH_CLIENTS):
      return true;
    case successType(SEARCH_CLIENTS):
      return false;
    case failureType(SEARCH_CLIENTS):
      return false;
    default:
      return state;
  }
}

export function clients(state=initialState.searchClients.clients, { type, payload }) {
  switch(type){
    case requestType(SEARCH_CLIENTS):
      return [];
    case successType(SEARCH_CLIENTS):
      return payload.response;
    case failureType(SEARCH_CLIENTS):
      return [];
    default:
      return state;
  }
}

const getSearchClientsState = (state) => state.clients.searchClients;

export const getSearchingClients = state => getSearchClientsState(state).searchingClients;
export const getClients = state => getSearchClientsState(state).clients;

export default combineReducers({
  searchingClients,
  clients
});