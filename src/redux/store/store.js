import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from '../reducer';
import rootSaga from '../sagas';

const configureStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
