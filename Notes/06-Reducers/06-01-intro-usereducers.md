# Why to use reducers

- as we've seen when we were implementing Context in the previous notes, managing state in a React application can be a bit of a pain. We have to pass down state and functions to update state to all the components that need it. This can get messy and hard to maintain, even if we're avoiding [prop drilling](../05-ContextAPI/05-01-prop-drilling.md).

- we can simplify the state in the app by using a reducer, by that, we are [extracting state login into a separate function](https://react.dev/learn/extracting-state-logic-into-a-reducer).
