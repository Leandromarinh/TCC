import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';
import storage from 'redux-persist/lib/storage';

// import de roots
import rootReducer from './ducks';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator({})],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
  });

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;