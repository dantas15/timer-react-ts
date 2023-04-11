import { Cycle } from '../../contexts/CyclesContext'
import { ActionTypes, CyclesActions } from './actions'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface Action {
  type: ActionTypes
  payload?: any
}

export function cyclesReducer(state: CyclesState, action: Action) {
  switch (action.type) {
    case CyclesActions.CREATE_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case CyclesActions.STOP_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, stoppedAt: new Date() }
            : cycle,
        ),
        activeCycleId: null,
      }
    case CyclesActions.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, finishedAt: new Date() }
            : cycle,
        ),
        activeCycleId: null,
      }
    default:
      return state
  }
}
