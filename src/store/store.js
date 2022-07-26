// import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './slices/people/saga'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counter'
import peopleReducer from './slices/people/people'

const saga = createSagaMiddleware()
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose

// const enhancer = composeEnhancers(applyMiddleware(saga))

// const store = createStore(reducers, enhancer)

const store = configureStore({
  reducer: { counter: counterReducer, people: peopleReducer }, // combine all our reducers
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saga), // to control which middleware we need
})

saga.run(rootSaga)

export default store
