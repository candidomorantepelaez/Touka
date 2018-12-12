import {
  map, mergeAll, objOf, chain, filter, isNil,
} from 'ramda'
import { combineReducers } from 'redux'


export const getMenu = modules => chain(obj => obj.menu, filter(obj => isNil(obj.menu) === false, modules))

export const mergeLang = (lang, modules) => mergeAll(map(obj => obj.messages[lang], filter(obj => isNil(obj.messages) === false, modules)))

export const getMessages = (languages, modules) => mergeAll(map(lang => objOf(lang)(mergeLang(lang, modules)), languages))

export const getRoutes = modules => chain(obj => obj.routes, filter(obj => isNil(obj.routes) === false, modules))

export const getReducers = modules => combineReducers(mergeAll(map(obj => objOf(obj.key)(obj.reducer), filter(obj => isNil(obj.reducer) === false, modules))))

export const getReactions = modules => chain(obj => obj.reactions, filter(obj => isNil(obj.reactions) === false, modules))

export const getPageRewiew = modules => chain(obj => obj.pageReview, filter(obj => isNil(obj.pageReview) === false, modules))
