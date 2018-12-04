import { requestType, successType, failureType } from "fredux";
import { LIST_CLIENTS } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  listClients: {
    listingClients: false,
    clients: [],
  },
};

export function listingClients(state = initialState.listClients.listingClients, { type }) {
  switch(type){
    case requestType(LIST_CLIENTS):
      return true;
    case successType(LIST_CLIENTS):
      return false;
    case failureType(LIST_CLIENTS):
      return false;
    default:
      return state;
  }
}

export function clients(state=initialState.listClients.clients, { type, payload }) {
  switch(type){
    case requestType(LIST_CLIENTS):
      return [];
    case successType(LIST_CLIENTS):
      return payload.response;
    case failureType(LIST_CLIENTS):
      return [];
    default:
      return state;
  }
}

const getListClientsState = (state) => state.clients.listClients;

export const getListingClients = state => getListClientsState(state).listingClients;
export const getClients = state => getListClientsState(state).clients;

export default combineReducers({
  listingClients,
  clients,
});