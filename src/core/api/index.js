import { customGet, customPost, customPut, customDel } from "core/api/custom-fredux-api-utils";
import history from "core/routes/history";

const handlerResponse = (res) => new Promise((resolve, reject) => {
  res.then(res => {
    if (res.status === 200) {
      resolve(res);
    }
    if (res.status === 401) {
      reject(res);
      history.push("/login");
    }
    reject(res);
  });
});

export const get = (ruta, options) => handlerResponse(customGet(ruta, options));

export const post = (ruta, options) => handlerResponse(customPost(ruta, options));

export const put = (ruta, options) => handlerResponse(customPut(ruta, options));

export const del = (ruta, options) => handlerResponse(customDel(ruta, options));