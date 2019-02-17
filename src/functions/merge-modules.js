import {
  isNil, is, find, concat,
} from 'ramda'


const mergeModules = (userModules, appModules) => {
  if (isNil(userModules) || !is(Array, userModules)) {
    return appModules
  }

  const coreModule = find(module => module.key === 'core', userModules)
  if (isNil(coreModule)) {
    return concat(userModules, appModules)
  }

  return userModules
}

export default mergeModules
