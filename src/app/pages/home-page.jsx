import React from 'react'
import { FormattedMessage } from 'react-intl'
// import withAuthentication from 'hoc/withAuthentication'


const HomePage = () => (
  <div>
    <p>hola</p>
    <h1><FormattedMessage id="core.app.wellcome" /></h1>
    <h2><FormattedMessage id="core.app.description" /></h2>
  </div>
)

// export default withAuthentication(HomePage, { onFalse: 'login' })
export default HomePage
