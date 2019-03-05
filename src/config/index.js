import appModule from 'app/module'
import NoMatchPage from 'app/components/no-match-page'
import MenuComponent from 'app/components/menu-principal'
import LoginPage from 'app/components/login-page'
import LogoutPage from 'app/components/logout-page'
import HomePage from 'app/components/home-page'
import AlertComponent from 'app/components/alert-component'


const initialConfig = {
  config: {
    apiBasePath: 'http://localhost:8080',
    apiLoginPath: '/login',
    apiLogoutPath: '/logout',
    appBasePath: '/',
    appLoginPath: '/login',
    appLogoutPath: '/logout',
    defaultLanguage: 'en',
    languages: ['es', 'en'],
    homeComponent: HomePage,
    loginComponent: LoginPage,
    logoutComponent: LogoutPage,
    noMatchComponent: NoMatchPage,
    menuComponent: MenuComponent,
    alertComponent: AlertComponent,
  },
  modules: [
    appModule,
  ],
}

export default initialConfig
