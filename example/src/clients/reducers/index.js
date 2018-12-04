import saveClient from "./save-client-reducer";
import updateClient from "./update-client-reducer";
import searchClients from "./search-clients-reducer";
import findOneClient from "./find-one-client-reducer";
import listClients from "./list-clients-reducer";
import paginateClients from "./paginate-clients-reducer";
import removeClient from "./remove-client-reducer";
import countClients from "./count-clients-reducer";
import { combineReducers } from 'redux';

export default combineReducers({
  saveClient,
  updateClient,
  searchClients,
  findOneClient,
  listClients,
  paginateClients,
  removeClient,
  countClients
});