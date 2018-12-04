import { PROMISE_CALL } from "fredux";
import api from "./api";

export const SAVE_CLIENT = "clients/saveClient";
export const UPDATE_CLIENT = "clients/updateClient";
export const FIND_ONE_CLIENT = "clients/findOneClient";
export const REMOVE_CLIENT = "clients/removeClient";
export const SEARCH_CLIENTS = "clients/searchClients";
export const LIST_CLIENTS = "clients/listsClients";
export const PAGINATE_CLIENTS = "clients/paginateClients";
export const COUNT_CLIENTS = "clients/countClients";

export const saveClient = (cliente) => ({
  type: SAVE_CLIENT,
  [PROMISE_CALL]: () => api.saveClient(cliente),
});

export const updateClient = (id, cliente) => ({
  type: UPDATE_CLIENT,
  [PROMISE_CALL]: () => api.updateClient(id, cliente),
});

export const findOneClient = (id) => ({
  type: FIND_ONE_CLIENT,
  [PROMISE_CALL]: () => api.findOneClient(id),
});

export const removeClient = (id) => ({
  type: REMOVE_CLIENT,
  [PROMISE_CALL]: () => api.removeClient(id),
});

export const searchClients = (search) => ({
  type: SEARCH_CLIENTS,
  [PROMISE_CALL]: () => api.searchClients(search),
});

export const listsClients = () => ({
  type: LIST_CLIENTS,
  [PROMISE_CALL]: () => api.listsClients(),
});

export const paginateClients = (page) => ({
  type: PAGINATE_CLIENTS,
  [PROMISE_CALL]: () => api.paginateClients(page),
});

export const countClients = () => ({
  type: COUNT_CLIENTS,
  [PROMISE_CALL]: () => api.countClients(),
});
