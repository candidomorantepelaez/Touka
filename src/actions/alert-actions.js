export const OPEN_MESSAGE = 'core/openMessage'
export const CLOSE_MESSAGE = 'core/closeMessage'


export const openMessage = data => ({
  type: OPEN_MESSAGE,
  payload: data,
})

export const closeMessage = data => ({
  type: CLOSE_MESSAGE,
  payload: data,
})
