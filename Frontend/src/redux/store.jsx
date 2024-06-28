import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";
import userRedux from "./userRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const  rootReducer = combineReducers({user:userRedux,cart:cartRedux});

const persistedUserReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedUserReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

let persistor = persistStore(store);

export { store, persistor };
