# How to clean up useEffect's code

## What is useEffect?

- "useEffect is a React Hook that lets you synchronize a component with an external system." - [react.dev](https://react.dev/reference/react/useEffect)

So, whenever there is something on screen we want to update when another variable changes, we can use useEffect. But be careful, [always think twice before using it](https://react.dev/reference/react/useEffect#caveats).

## How to clean it up

- you can return a function inside useEffect's first parameter, so it runs after the main code is executed
- this was really useful for me when I was coding a pomodoro-like app to know wether to _update_ or _interrupt_ the amounts of seconds past

```ts
useEffect(() => {
  if (activeCycle) {
    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startedAt
      );

      if (secondsDifference >= totalSeconds) {
        // interrupt the cycle code
        // ...

        clearInterval(interval);
      } else {
        // update the amount of seconds past in the current cycle
        // ...
      }
    }, 1000);
  }
}, [activeCycle, totalSeconds]);
```

- in this example, I needed a way to close the intervals, since useEffect created a new interval each time it executed and this interval kept executing every time
  - so the timer was basically not working as it should.
- for it to work, I needed to clean up every execution
- that's the result:

```ts
useEffect(() => {
  let interval: number;

  if (activeCycle) {
    interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startedAt
      );

      if (secondsDifference >= totalSeconds) {
        // interrupt the cycle code
        // ...

        clearInterval(interval);
      } else {
        // update the amount of seconds past in the current cycle
        // ...
      }
    }, 1000);
  }
  return () => {
    clearInterval(interval);
  };
}, [activeCycle, totalSeconds]);
```

- I declared interval before, so I could clear it on the [setup function](https://react.dev/reference/react/useEffect#useeffect)
