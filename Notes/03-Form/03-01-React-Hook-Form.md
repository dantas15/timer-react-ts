# Adding dependency `react-hook-form`

> [react-hook-form docs](https://react-hook-form.com/get-started)

```
yarn add react-hook-form
```

# Using the `useForm` hook

## Using the `register` function

- [Docs](https://react-hook-form.com/api/useform/register/#main)

- Register returns a bunch of stuff related to an input (`name`, `ref`, `onChange`, `onBlur`, etc...)
- For example, the task input:

```tsx
<TaskInput
  id="task"
  placeholder="name your project here"
  list="task-suggestions"
  {...register('task')}
/>
```

### Getting value as number on Submit

- The second parameter when using `register` is an object with some config values.

- To get the value as number, you should pass to the register as:

```tsx
<MinutesAmountInput
  id="minutesAmount"
  placeholder="00"
  step={5}
  min={5}
  max={60}
  {...form.register('minutesAmount', { valueAsNumber: true })}
/>
```

- See all configs [here](https://react-hook-form.com/api/useform/register#options)

## Using `handleSubmit`

- `handleSubmit` receives two function as parameters:
  - `onValidHandler`
  - `onInvalidHandler` (optional)
- `handleSubmit` automatically validates the fields before running `onValidHandler`

## Watch variable

- Use `watch` from `useForm`
- Example to validate if the submit button should be disabled:

```tsx
// ...

const task = form.watch('task');
const isSubmitDisabled = !task;

return (
  <StartCountDownButton disabled={isSubmitDisabled} type="submit">
    Submit
  </StartCountDownButton>
);
```
