import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/todolist/todolistSlice'
import userReducer from '../features/customer/userSlice';

import { productsApi } from '../services/products.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { customerApi } from '../services/customer.api'
import { userApi } from '../services/user.api'
import { paymentsApi } from '../services/payments.api';

export const store = configureStore({
    reducer: {
        counterR:counterReducer,
        todolistR:todolistReducer,
        userR:userReducer,
        [productsApi.reducerPath]:productsApi.reducer,
        [customerApi.reducerPath]:customerApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        [paymentsApi.reducerPath]:paymentsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware,customerApi.middleware,userApi.middleware,paymentsApi.middleware),
})
setupListeners(store.dispatch)