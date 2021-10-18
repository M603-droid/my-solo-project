import axios from 'axios'

export const fetchAllArtworks = () => {
    return async (dispatch) => {
        const allArtworks = await axios.get("https://fakestoreapi.com/products")
        console.log(allArtworks)
        const result = allArtworks.data

        dispatch({
            type: 'FETCH_ALL_ARTWORKS',
            payload: result
        })
    }
}

export const addToCart = (artwork) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: artwork
        })
    }
}

export const removeFromCart = (id) => {

    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id,
        })
    }
}

export const addProductToFavorite = (productToFavorite) => ({
    type: "ADD_PRODUCT_TO_FAVORITE",
    payload: productToFavorite,
  });
  
  export const removeProductFromFavorite = (productFromFavorite) => ({
    type: "REMOVE_PRODUCT_FROM_FAVORITE",
    payload: productFromFavorite,
  });

   // increment the item
   export  const increment = (id) =>( {
    type: "INCREMENT",
    payload: id,
    
  });


// decrement the item
export  const decrement = (id) => ({
    type: "DECREMENT",
    payload: id,
  });

