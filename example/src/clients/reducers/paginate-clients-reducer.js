import { requestType, successType, failureType } from "fredux";
import { PAGINATE_CLIENTS } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  paginateClients: {
    paginatingClients: false,
    clients: [],
  },
};

export function paginatingClients(state = initialState.paginateClients.paginatingClients, { type }) {
  switch(type){
    case requestType(PAGINATE_CLIENTS):
      return true;
    case successType(PAGINATE_CLIENTS):
      return false;
    case failureType(PAGINATE_CLIENTS):
      return false;
    default:
      return state;
  }
}

export function clients(state=initialState.paginateClients.clients, { type, payload }) {
  switch(type){
    case requestType(PAGINATE_CLIENTS):
      return [];
    case successType(PAGINATE_CLIENTS):
      return payload.response;
    case failureType(PAGINATE_CLIENTS):
      return [];
    default:
      return state;
  }
}

const getPaginateClientsState = (state) => state.clients.paginateClients;

export const getPaginatingClients = state => getPaginateClientsState(state).paginatingClients;
export const getClients = state => getPaginateClientsState(state).clients;

export default combineReducers({
  paginatingClients,
  clients,
});