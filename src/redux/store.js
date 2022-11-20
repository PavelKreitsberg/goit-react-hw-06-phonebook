import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from "./contacts/contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})

const persistConfig = {
  key: 'root',
    storage,
  whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)
