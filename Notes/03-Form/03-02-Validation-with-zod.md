# Adding dependencies

- [Resolvers](https://www.npmjs.com/package/@hookform/resolvers) for `react-hook-form` which is a validation resolver for a bunch of validation libraries
- [Zod](https://github.com/colinhacks/zod) Which is a TypeScript-first schema validation with static type inference

```
yarn add @hookform/resolvers zod
```

# Using zod schema to validate the form

- Modify `useForm` hook

```ts
import { z } from 'zod';

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Whats's the task?"),
  minutesAmount: z
    .number()
    .min(1, 'How long will you be working on it?')
    .min(5, 'the cycle must have at least 5 minutes')
    .max(60, 'the cycle must have at most 60 minutes'),
});

const form = useForm({
  resolver: zodResolver(newCycleFormValidationSchema),
});
```

# Infer type from zod schema

Use [`z.infer`](https://github.com/colinhacks/zod#type-inference):

```tsx
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema

export function Home() {
  const form = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25,
    },
  })
  // ...
}
```
