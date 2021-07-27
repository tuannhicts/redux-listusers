import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/root-reducers';
import mySaga from '../saga/users-saga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it the store
export default createStore(rootReducers, applyMiddleware(sagaMiddleware));

// run saga
sagaMiddleware.run(mySaga);
