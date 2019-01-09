import {
  get as freduxGet, post as freduxPost, put as freduxPut, del as freduxDel,
} from 'fredux-api-utils'
import { history } from 'routes'


const handlerResponse = res => new Promise((resolve, reject) => {
  res.then((result) => {
    if (result.status >= 200 && result.status < 300) {
      resolve(res)
    }
    if (result.status === 401) {
      reject(res)
      history.push('/touka-no-auth-redirect')
    }
    reject(res)
  })
})

export const get = (ruta, options) => handlerResponse(freduxGet(ruta, options))

export const post = (ruta, options) => handlerResponse(freduxPost(ruta, options))

export const put = (ruta, options) => handlerResponse(freduxPut(ruta, options))

export const del = (ruta, options) => handlerResponse(freduxDel(ruta, options))
