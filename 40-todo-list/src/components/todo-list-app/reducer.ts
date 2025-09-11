import type { Draft } from 'immer'
import type { Todo } from './types'

// --------------------------------------------------------------------------
// 타입 선언

interface State {
  todos: Todo[]
}

type Action = { type: typeof ACTION.ADD; payload: { newDoIt: Todo['doit'] } }

// --------------------------------------------------------------------------
// 액션 타입

const ACTION = {
  ADD: '@todolist/add',
} as const

// --------------------------------------------------------------------------
// 액션 크리에이터(형식이 지정된 액션을 반환하는 함수)
// 액션 = { type: 어떤일을 할지, payload: 무엇을 전달할지 }
export const addAction = (newDoIt: Todo['doit']): Action => ({
  type: ACTION.ADD,
  payload: { newDoIt },
})

// --------------------------------------------------------------------------
// 리듀서 함수
export function todoListReducer(draft: Draft<State>, action: Action) {
  switch (action.type) {
    case ACTION.ADD: {
      const { newDoIt } = action.payload
      const newTodoItem: Todo = {
        id: crypto.randomUUID(),
        doit: newDoIt,
        done: false,
      }
      return void draft.todos.unshift(newTodoItem)
    }

    default: {
      return draft
    }
  }
}
