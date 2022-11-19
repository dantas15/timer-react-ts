import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'
import { useState } from 'react'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Whats's the task?"),
  minutesAmount: z
    .number()
    .min(1, 'How long will you be working on it?')
    .min(5, 'the cycle must have at least 5 minutes')
    .max(60, 'the cycle must have at most 60 minutes'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const form = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    form.reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const task = form.watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={form.handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I&apos;ll be working on</label>
          <TaskInput
            id="task"
            placeholder="name your project here"
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
            min={5}
            max={60}
            {...form.register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={20} /> Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
