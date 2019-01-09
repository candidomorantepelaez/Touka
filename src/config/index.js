import appModule from 'app/module'
import NoMatchPage from 'app/pages/no-match-page'
import MenuComponent from 'components/menus/menu-principal'
import LoginPage from 'app/pages/login-page'
import LogoutPage from 'app/pages/logout-page'
import HomePage from 'app/pages/home-page'


const initialConfig = {
  config: {
    apibasePath: 'http://localhost:8080',
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
  },
  modules: [
    appModule,
  ],
}

export default initialConfig
