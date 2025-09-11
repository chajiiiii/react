import type { Draft } from 'immer'
import type { Todo } from './types'

// --------------------------------------------------------------------------
// 타입 선언

interface State {
  todos: Todo[]
}

type Action = { type: typeof ACTION.ADD }

// --------------------------------------------------------------------------
// 액션 타입

const ACTION = {
  ADD: '@todolist/add',
} as const

// --------------------------------------------------------------------------
// 리듀서 함수
export default function todoListReducer(draft: Draft<State>, action: Action) {
  switch (action.type) {
    default: {
      return draft
    }
  }
}
