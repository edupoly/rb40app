import { combineReducers, createStore,applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counter.reducer";
import { todoReducer } from "./reducers/todolist.reducer";
import { countriesReducer } from "./reducers/countries.reducer";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/products.reducer";

export var store = createStore(combineReducers({counterReducer,todoReducer,countriesReducer,productsReducer}),applyMiddleware(thunk))