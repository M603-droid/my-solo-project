import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { productsReducer } from '../reducers/productReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'


const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE

export const initialState = {
  products: {
    all_products: [],
    cart: [],
    cartIcons: [],


  },

}



const persistConfig = {
  key: 'root',
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_ENCRYPT_KEY,
  //   }),
  // ],
}


const allReducers = combineReducers({
  products: productsReducer,

})

const persistAllReducers = persistReducer(
  persistConfig, allReducers
)

export const store = createStore(persistAllReducers,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))

export const persistor = persistStore(store)