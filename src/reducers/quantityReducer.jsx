import { initialState } from '../store'

export const quantityReducer = (state = initialState.quantity, action) => {
    switch (action.type) {
        // we're going to deal with two action types: INCREMENT and DECREMENT
        case 'INCREMENT':
          return ({
            // from every case of your reducer we'll need to return the new redux state object
            // here we need to increment our count variable
            ...state,
            count: state.count + 1,
          })
        case 'DECREMENT':
          return { ...state,count:state.count - 1}
        default:
          console.log('I fell into default!')
          return state
        }
    }
        
export default quantityReducer