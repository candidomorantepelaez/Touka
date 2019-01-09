import LoginPage from 'pages/login-page'
import HomePage from 'pages/home-page'
import LogoutPage from 'pages/logout-page'


export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/login', exact: true, component: LoginPage },
  { path: '/logout', exact: true, component: LogoutPage },
]
