import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from './store/slices/counter/counter'
import { getPeople } from './store/slices/people/people'
import { getSagaRequest } from './store/slices/people/saga'

function App() {
  const { counter, people } = useSelector(store => store)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <header className='App-header'>
        {people.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className='d-flex'>
              <button onClick={() => dispatch(decrement())}>-</button>
              {counter.count}
              <button
                onClick={() => {
                  dispatch(increment())
                }}
              >
                +
              </button>
              <button onClick={() => dispatch(incrementByAmount(10))}>
                + 10
              </button>
            </div>
            <div className='d-flex'>
              <button
                onClick={() => {
                  dispatch(getPeople())
                }}
              >
                thunk call
              </button>
              <button onClick={() => dispatch(getSagaRequest())}>
                saga call
              </button>
            </div>
          </>
        )}

        {people.error && <p>{people.error}</p>}
      </header>
    </div>
  )
}

export default App
