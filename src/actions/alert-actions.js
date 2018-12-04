export const OPEN_ALERT = "core/openAlert";
export const CLOSE_ALERT = "core/closeAlert";

export const openAlert = (data) => ({
  type: OPEN_ALERT,
  payload: data,
});

export const closeAlert = (data) => ({
  type: CLOSE_ALERT,
  payload: data,
});
