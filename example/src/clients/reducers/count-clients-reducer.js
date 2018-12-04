import { requestType, successType, failureType } from "fredux";
import { COUNT_CLIENTS } from "./../actions";
import { combineReducers } from 'redux';

const initialState = {
  countClients: {
    countingClients: false,
    numberOfClients: 0,
  },
};

export function countingClients(state = initialState.countClients.countingClients, { type }) {
  switch(type){
    case requestType(COUNT_CLIENTS):
      return true;
    case successType(COUNT_CLIENTS):
      return false;
    case failureType(COUNT_CLIENTS):
      return false;
    default:
      return state;
  }
}

export function numberOfClients(state = initialState.countClients.numberOfClients, { type, payload }) {
  switch(type){
    case requestType(COUNT_CLIENTS):
      return 0;
    case successType(COUNT_CLIENTS):
      return payload.numberFiles;
    case failureType(COUNT_CLIENTS):
      return 0;
    default:
      return state;
  }
}

const getCountClientsState = (state) => {
  return state.clients.countClients;
}

export const getCountingClients = state => {
  return getCountClientsState(state).countingClients
};
export const getNumberOfClients = state => {
  return getCountClientsState(state).numberOfClients
};

export default combineReducers({
  countingClients,
  numberOfClients,
});
