# Introduction

in simple terms - redux is a JS library to manage global state, redux toolkit on the other hand makes it easier to write redux applications in this repo we explaning who to implement redux toolkit in our app for more info about you can visit [redux-toolkit docs](https://redux-toolkit.js.org/introduction/getting-started).

## Get started with installation

In the project directory, you can run:

> npx create-react-app app-name

> npm install @reduxjs/toolkit

### 1 - creating store

first lets create a global store with use of `configureStore` which is a friendly abstraction over the standard redux
you can see the example at[`createStore`](./src/store/store.js)
for more info about you can visit [redux-toolkit createStore docs](https://redux-toolkit.js.org/api/configureStore).

### 2 - create slice(reducer)

createSlice is our second used api that accepts a single configuration object parameter which contains:
1- name : the name of our slice/reducer
2- initialState : our initial state in the slice
3- reducers : our actions in the reducer
4- extraReducers : we can put extra functionally logic
you can see the example at ['createSlice'](./src/store/slices/counter/counter.js)
for more info about you can visit [redux-toolkit createSlice docs](https://redux-toolkit.js.org/api/createSlice).

### 3 - create thunk call

with `createAsyncThunk` API you can build a thunk action and it's accept 2 parameter
Unordered Lists:
1- name
2- call back async call function
example at [createAsyncThunk](./src/store/slices/people/people.js)
for more info about you can visit [redux-toolkit createAsyncThunk docs](https://redux-toolkit.js.org/api/createAsyncThunk).
