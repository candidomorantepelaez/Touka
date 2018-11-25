import { PROMISE_CALL } from "fredux";
import api from "core/api/login-api";

export const ON_LOGIN = "core/credentials";
export const ON_LOGOUT = "core/logout";
export const ON_SAVE_USER_FROM_COOKIE = "core/saveCurrentUser";

export const credentials = value => ({
  type: ON_LOGIN,
  [PROMISE_CALL]: () => api.credentials(value),
});

export const logout = value => ({
  type: ON_LOGOUT,
  [PROMISE_CALL]: () => api.logout(),
});

export const saveCurrentUser = value => ({
  type: ON_SAVE_USER_FROM_COOKIE,
  payload: value,
});