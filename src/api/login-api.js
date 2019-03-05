import { post, get } from 'api'
import globalData from 'config/get-global-data'


const login = value => new Promise((resolve, reject) => {
  const configData = globalData()
  post(`${configData.apiBasePath}${configData.apiLoginPath}`, {
    body: value,
    mode: 'cors',
  })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

const logout = () => new Promise((resolve, reject) => {
  const configData = globalData()
  get(`${configData.apiBasePath}${configData.apiLogoutPath}`, {
    mode: 'cors',
    credentials: 'include',
  })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res))
})

export default {
  login,
  logout,
}
