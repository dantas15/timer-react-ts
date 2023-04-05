import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MinutesAmountInput, TaskInput, FormContainer } from './styles'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Whats's the task?"),
  minutesAmount: z
    .number()
    .min(1, 'How long will you be working on it?')
    .min(1, 'the cycle must have at least 5 minutes')
    .max(60, 'the cycle must have at most 60 minutes'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const form = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll be working on</label>
      <TaskInput
        id="task"
        placeholder="name your project here"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...form.register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...form.register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes</span>
    </FormContainer>
  )
}
