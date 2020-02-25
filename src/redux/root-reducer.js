import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
/*
set 'user' property of our big giant state object to whatever returned by userReducer fn
(here, it returns currentUser object)
this combineReducers returns big giant state object as store object to store.js
*/

export default persistReducer(persistConfig, rootReducer);
