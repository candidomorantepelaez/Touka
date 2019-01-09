import {
  isNil, is, find, append,
} from 'ramda'


const mergeModules = (userModules, appModules) => {
  if (isNil(userModules) || !is(Array, userModules)) {
    return appModules
  }

  const coreModule = find(module => module.key === 'core', userModules)
  if (isNil(coreModule)) {
    return append(userModules, appModules)
  }

  return userModules
}

export default mergeModules
