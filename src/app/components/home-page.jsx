import React from 'react'
import { FormattedMessage } from 'react-intl'


const HomePage = () => (
  <div>
    <h1><FormattedMessage id="core.app.title" /></h1>
    <h1><FormattedMessage id="core.app.wellcome" /></h1>
    <h2><FormattedMessage id="core.app.description" /></h2>
  </div>
)

export default HomePage
