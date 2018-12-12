import { post, get } from 'api'
import { apiPath, loginPath, logoutPath } from 'constans'


const credentials = value => new Promise((resolve, reject) => {
  post(`${apiPath}${loginPath}`, { body: value })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

const logout = () => new Promise((resolve, reject) => {
  get(`${apiPath}${logoutPath}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

export default {
  credentials,
  logout,
}
