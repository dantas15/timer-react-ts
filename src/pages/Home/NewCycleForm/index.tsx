import { MinutesAmountInput, TaskInput, FormContainer } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll be working on</label>
      <TaskInput
        id="task"
        placeholder="name your project here"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...register('task')}
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
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes</span>
    </FormContainer>
  )
}
