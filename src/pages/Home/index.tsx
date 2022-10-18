import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  const form = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

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
