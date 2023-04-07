import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Whats's the task?"),
  minutesAmount: z
    .number()
    .min(1, 'How long will you be working on it?')
    .min(1, 'the cycle must have at least 1 minutes')
    .max(60, 'the cycle must have at most 60 minutes'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, stopCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 25,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    newCycleForm.reset()
  }

  function handleStopCycle() {
    stopCurrentCycle()
  }

  const task = newCycleForm.watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={newCycleForm.handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
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
