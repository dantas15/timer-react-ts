import { HandPalm, Play } from 'phosphor-react'
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
  StopCountDownButton,
  TaskInput,
} from './styles'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

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
  startedAt: Date
  stoppedAt?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)

  const form = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setSecondsAmountPassed(
          differenceInSeconds(new Date(), activeCycle.startedAt),
        )
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startedAt: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setSecondsAmountPassed(0)

    form.reset()
  }

  function handleStopCycle() {
    setCycles(
      cycles.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, stoppedAt: new Date() }
          : cycle,
      ),
    )

    setActiveCycleId(null)
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsAmountPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
  }, [minutes, seconds, activeCycle])

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
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...form.register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        {activeCycle ? (
          <StopCountDownButton type="button" onClick={handleStopCycle}>
            <HandPalm size={20} /> Stop
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={20} /> Start
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
