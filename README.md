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
Unordered Lists:
name 1initialState 2reducers 3extraReducers

you can see the example at ['createSlice'](./src/store/slices/counter/counter.js)
for more info about you can visit [redux-toolkit createSlice docs](https://redux-toolkit.js.org/api/createSlice).

### 3 - create thunk call

with `createAsyncThunk` API you can build a thunk action and it's accept 2 parameter
Unordered Lists:
name of type 1call back async call function
example at [createAsyncThunk](./src/store/slices/people/people.js)
for more info about you can visit [redux-toolkit createAsyncThunk docs](https://redux-toolkit.js.org/api/createAsyncThunk).
