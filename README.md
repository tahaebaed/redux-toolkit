# The Team

- [Taha Ebaed](https://github.com/tahaebaed)
- [Esraa Ismail](https://github.com/Esraaismail309)
- [Aliaa ALi](https://github.com/aaliaa-ali)

* [our presentation](https://www.canva.com/design/DAFG8yjfGKw/PDBR3bVh2eJgZsutA-aasw/view?utm_content=DAFG8yjfGKw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#2)
* [our explanation docs](https://docs.google.com/document/d/1McZ8ia9cwrkWOerPc8J91S_ruWtlP17guRQo34gI7sI/edit)

# Introduction

in simple terms - redux is a JS library to manage global state, redux toolkit on the other hand makes it easier to write redux applications in this repo we explaning who to implement redux toolkit in our app for more info about you can visit [redux-toolkit docs](https://redux-toolkit.js.org/introduction/getting-started).

## Get started with installation

In the project directory, you can run:

```bash
npx create-react-app app-name
```

```bash
npm install @reduxjs/toolkit
```

### 1 - creating store

first lets create a global store with use of `configureStore` which is a friendly abstraction over the standard redux
you can see the example at[`createStore`](./src/store/store.js)
for more info about you can visit [redux-toolkit createStore docs](https://redux-toolkit.js.org/api/configureStore).

### 2 - create slice(reducer)

createSlice is our second used api that accepts a single configuration object parameter which contains:

- name : the name of our slice/reducer
- initialState : our initial state in the slice
- reducers : our actions in the reducer
- extraReducers : we can put extra functionally logic

you can see the example at ['createSlice'](./src/store/slices/counter/counter.js)
for more info about you can visit [redux-toolkit createSlice docs](https://redux-toolkit.js.org/api/createSlice).

### 3 - create thunk call

with `createAsyncThunk` API you can build a thunk action and it's accept 2 parameter
Unordered Lists:

- name : the name/prefix of the action call of the thunk
- call back async call function
  example at [createAsyncThunk](./src/store/slices/people/people.js)
  for more info about you can visit [redux-toolkit createAsyncThunk docs](https://redux-toolkit.js.org/api/createAsyncThunk).
