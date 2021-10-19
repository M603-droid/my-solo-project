import { initialState } from '../store/'



export const productsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ARTWORKS':
            return {
                ...state,
                all_products: action.payload,
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, {product:action.payload,count:0}],
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...state.cart.filter(car => car !== action.payload)],
            }


        default:
            return state

    }
}
