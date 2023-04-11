import { Cycle } from '../../contexts/CyclesContext'

export const CyclesActions = {
  CREATE_NEW_CYCLE: 'CREATE_NEW_CYCLE',
  STOP_CURRENT_CYCLE: 'STOP_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED: 'MARK_CURRENT_CYCLE_AS_FINISHED',
} as const
export type ActionTypes = typeof CyclesActions[keyof typeof CyclesActions]

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: CyclesActions.CREATE_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: CyclesActions.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function stopCurrentCycleAction() {
  return {
    type: CyclesActions.STOP_CURRENT_CYCLE,
  }
}
