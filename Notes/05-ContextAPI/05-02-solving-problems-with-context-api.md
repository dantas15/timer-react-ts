# Solving problems with Context

| Context lets you write components that “adapt to their surroundings and display themselves differently depending on where (or, in other words, in which context) they are being rendered. - [react.dev](https://react.dev/learn/passing-data-deeply-with-context)

Basically, Context enables us to pass data through the component tree without having to pass props down manually at every level (prop drilling for example).

## How to use it?

- First, we need to create a Context using `React.createContext` and then we can use it in our components

  ```tsx
  import { createContext } from 'react';

  export const MyContext = createContext()

  // If you'se using TypeScript, you can also pass a default value to the context with the type of the value you're going to pass
  export const MyContext = createContext({} as MyContextType)
  ```

- then we need to wrap all the components we want to use the context in a `Provider` component

  ```jsx
  import { MyContext } from './MyContext';

  export function App() {
    return (
      <MyContext.Provider value={/* value of your context */}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </MyContext.Provider>
    );
  }
  ```

- now you can access the data from your context in any component that is wrapped in the `Provider` component using `useContext`:

  ```jsx
  import { MyContext } from './MyContext';

  export function ComponentA() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
  }
  ```

## Conclusion

- That's it! I honestly believe that the best way to learn anything is trying for yourself, so I encourage you to try to create a simple counter app using Context.
- Also, if you want to see it in action, check this [simple timer app on my Github](https://github.com/ist4/timer-react-ts)
  - In this app I used Context to share the state of the timer between the `Home`, `Countdown` and `NewCycleForm` components

## Reference

- [`createContext`](https://react.dev/reference/react/createContext)
- [`useContext`](https://react.dev/reference/react/useContext)

<!-- Some unused drafts I made when I was writing this
(don't mind them)
## To-do for this article

- Create a simple counter app to show as an example [here](https://stackblitz.com/edit/vitejs-vite-iewkv9?file=index.html&terminal=dev)

- In this example we'll have three main components:
  - `ValueInput`, where the user is going to input a certain value that will be increased or decreased based on which button is pressed

    ```jsx
    import { useState } from 'react';

    export function ValueInput() {
      // for now we'll use useState
      const [valueToChange, setValueToChange] = useState(0);

      return (
        <div>
          <label htmlFor="valueToChange">
            Inform how much you want to increase/decrease:
          </label>
          <input
            type="number"
            id="valueToChange"
            value={valueToChange}
            onChange={(e) => setValueToChange(Number(e.target.value))}
          />
        </div>
      );
    }
    ```

  - `DecreaseCounterButton`, that will decrease the value of the `count` value

    ```jsx
    export function DecraseCounterButton() {
      // using mocked values for now
      const counter = 0;
      const valueToChange = 1;
      return (
        <button>
          Decrease ({counter} - {valueToChange})
        </button>
      );
    }
    ```

  - `IncreaseCounterButton`, that will increase the value of the `count` value

    ```jsx
    export function IncreaseCounterButton() {
      // using mocked values for now
      const counter = 0;
      const valueToChange = 1;
      return (
        <button>
          Increase ({counter} + {valueToChange})
        </button>
      );
    }
    ```

- Now for the wrapper (that will be called `App`), we'll display the current counter value and an error message if the user tries to increase or decrease without informing `valueToChange`
-->