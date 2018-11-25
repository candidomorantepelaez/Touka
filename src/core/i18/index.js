import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import { getMessages } from "core/module";

export const addLocale = () => addLocaleData ([ ...en, ...es]);
export const messages = (languages, modules) => getMessages(languages, modules);
