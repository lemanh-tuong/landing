import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducers from './store/rootReducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const _combineReducers = combineReducers({
  ...rootReducers,
});

const reducers = persistReducer(persistConfig, _combineReducers);
const middlewares: Middleware[] = [thunk];

if (isDev) {
  middlewares.push(logger);
}

const store = createStore(reducers, undefined, composeEnhancers(applyMiddleware(...middlewares)));
const persistor = persistStore(store as any);

export type Reducers = ReturnType<typeof _combineReducers>;

export { store, persistor };

