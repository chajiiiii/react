import type { Draft } from 'immer'
import type { Todo } from './types'

// --------------------------------------------------------------------------
// 타입 선언

interface State {
  todos: Todo[]
}

type Action =
  | { type: typeof ACTION.ADD; payload: { newDoIt: Todo['doit'] } }
  | { type: typeof ACTION.REMOVE; payload: { removeTodoId: Todo['id'] } }
  | { type: typeof ACTION.TOGGLE; payload: { toggleTodoId: Todo['id'] } }

// --------------------------------------------------------------------------
// 액션 타입

const ACTION = {
  ADD: '@todolist/add-todo',
  REMOVE: '@todolist/remove-todo',
  TOGGLE: '@todolist/toggle-done',
} as const

// --------------------------------------------------------------------------
// 액션 크리에이터(형식이 지정된 액션을 반환하는 함수)
// 액션 = { type: 어떤일을 할지, payload: 무엇을 전달할지 }
export const addAction = (newDoIt: Todo['doit']): Action => ({
  type: ACTION.ADD,
  payload: { newDoIt },
})

export const removeAction = (removeTodoId: Todo['id']): Action => ({
  type: ACTION.REMOVE,
  payload: { removeTodoId },
})

export const toggleAction = (toggleTodoId: Todo['id']): Action => ({
  type: ACTION.TOGGLE,
  payload: { toggleTodoId },
})

// --------------------------------------------------------------------------
// 초기화(init) 함수
// - 브라우저(외부 시스템)와 상태 동기화

const { localStorage } = globalThis
const TODOLIST_KEY = '@todolist'

export const init = (initialValue: State): State => {
  return getTodoListStorageData() ?? initialValue
}

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
      draft.todos.unshift(newTodoItem)
      break
    }

    case ACTION.REMOVE: {
      const { removeTodoId } = action.payload
      const removeIndex = draft.todos.findIndex(
        (todo) => todo.id === removeTodoId
      )
      draft.todos.splice(removeIndex, 1)
      break
    }

    case ACTION.TOGGLE: {
      const { toggleTodoId } = action.payload
      const toggleIndex = draft.todos.findIndex(
        (todo) => todo.id === toggleTodoId
      )
      const todo = draft.todos[toggleIndex]

      todo.done = !todo.done

      break
    }

    default: {
      return draft
    }
  }
}

// --------------------------------------------------------------------------
// 스토리지 데이터 관리

// 로컬 스토리지에서 데이터 설정하기
export const setTodoListStorageData = (newStorageData: State): void => {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(newStorageData))
}

// 로컬 스토리지에서 데이터 가져오기(설정 후에만 가져올 수 있음)
const getTodoListStorageData = () => {
  console.log(localStorage)
  const storageData = localStorage.getItem(TODOLIST_KEY)
  return storageData ? JSON.parse(storageData) : null
}

// 로컬 스토리지에서 데이터 제거하기
export const removeTodoListStorageData = (): void => {
  if (!getTodoListStorageData()) return
  localStorage.removeItem(TODOLIST_KEY)
}
