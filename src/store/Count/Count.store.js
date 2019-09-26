export const INCREASED = "INCREASED"
export const DECREASED = "DECREASED"

const initialState = {
  number: 0
}

const Count = (state = initialState, action) => {
  switch(action.type) {
    case INCREASED:
      return {
        ...state,
        number: number + 1
      }
    case DECREASED:
      return {
        ...state,
        number: number - 1
      }
    default: 
      return state
  }
}

export const increased = () => ({
  type: INCREASED
})

export const decreased = () => ({
  type: DECREASED
})

export default Count;