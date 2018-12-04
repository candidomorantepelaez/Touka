import { get, post, put, del} from "touka/core/api/index";
import { apiPath } from "touka/core/constans";

const saveClient = (cliente) => new Promise((resolve, reject) => {
  post(`${apiPath}/client`, { body: cliente })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const updateClient = (id, cliente) => new Promise((resolve, reject) => {
  put(`${apiPath}/client/${id}`, { body: cliente })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const findOneClient = (id) => new Promise((resolve, reject) => {
  get(`${apiPath}/client/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const removeClient = (id) => new Promise((resolve, reject) => {
  del(`${apiPath}/client/${id}`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const searchClients = (search) => new Promise((resolve, reject) => {
  post(`${apiPath}/clients/search`, { body: search })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const listClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/clients/list`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const paginateClients = (page) => new Promise((resolve, reject) => {
  post(`${apiPath}/clients/paginate`, { body: page })
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

const countClients = () => new Promise((resolve, reject) => {
  get(`${apiPath}/clients/count`)
    .then(res => res.json().then(data => resolve(data)))
    .catch(res => reject(res));
});

export default {
  saveClient,
  updateClient,
  findOneClient,
  removeClient,
  searchClients,
  listClients,
  paginateClients,
  countClients,
};
