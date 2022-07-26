export const increment = state => {
  state.count += 1
}

export const decrement = state => {
  state.count -= 1
}

export const incrementByAmount = (state, action) => {
  state.count += action.payload
}
