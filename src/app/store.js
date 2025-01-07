import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/todolist/todolistSlice'
import { productsApi } from '../services/products.api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        counterR:counterReducer,
        todolistR:todolistReducer,
        [productsApi.reducerPath]:productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)