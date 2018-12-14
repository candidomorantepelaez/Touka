import React from 'react'
import { setConfig, hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

const Root = () => <Theme hashRouter={undefined} />

export default hot(module)(Root)
