import { post, get } from 'api'
import globalData from 'config/get-global-data'


const login = value => new Promise((resolve, reject) => {
  post(`${globalData.apiPath}${globalData.loginPath}`, { body: value })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

const logout = () => new Promise((resolve, reject) => {
  get(`${globalData.apiPath}${globalData.logoutPath}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

export default {
  login,
  logout,
}
