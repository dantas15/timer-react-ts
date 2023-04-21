# What is a reducer?

- a reducer is a way to extract state logic into a separate function
- to do so, we need to use the `useReducer` hook
- `useReducer` returns an array with two positions
  - the first one is the current state (as the first in setState)
  - the second one is a function that updates the state, which is often called `dispatch`
    - it differs from the `setState` function in that it takes an `action` as an argument, and the action is an object that contains the type of action and any data we want to pass to the reducer
- `useReducer` takes two main arguments: a reducer function and an initial state
  - the reducer function takes two arguments: the current state and an action
    - the state represents the current state of the reducer, this is just like the state we would pass to `useState`'s `setState`
    - the action is an object that contains the type of action and any data we want to pass to the reducer, for example, we may specify the type of action and the payload
      - this is good because we can keep the logic of the reducer in one place and prevent from having to write a lot of logic in other components
  - the initial state should be initialized with the default value of the state we want to manage
