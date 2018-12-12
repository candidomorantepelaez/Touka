import LoginPage from 'pages/login/login-page'
import HomePage from 'pages/home/home-page'


export default [
  { path: '/home', exact: true, component: HomePage },
  { path: '/login', exact: true, component: LoginPage },
]
