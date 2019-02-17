import { addLocaleData, FormattedMessage } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import { getMessages } from 'modules'


export const initDefaultLocales = () => addLocaleData([...en, ...es])
export const messages = (languages, modules) => getMessages(languages, modules)
export const intlText = FormattedMessage
