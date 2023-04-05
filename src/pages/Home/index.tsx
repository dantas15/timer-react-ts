import { HandPalm, Play } from 'phosphor-react'
import { z } from 'zod'

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startedAt: Date
  stoppedAt?: Date
  finishedAt?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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
    setCycles((state) =>
      state.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, stoppedAt: new Date() }
          : cycle,
      ),
    )

    setActiveCycleId(null)
  }

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
        <NewCycleForm />

        <Countdown />

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
