import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from 'react'
import { useImmerReducer } from 'use-immer'
import {
  addAction,
  editAction,
  init,
  removeAction,
  removeTodoListStorageData,
  setTodoListStorageData,
  todoListReducer,
  toggleAction,
} from './reducer'
import { Todo, type TodoListContextValue } from './types'

// 컨텍스트
const TodoListContext = createContext<null | TodoListContextValue>(null)

// 초깃값(초기화 함수에서 쓸 수 있음)
const initialState = {
  todos: [
    {
      id: 'todo-1',
      doit: '할 일을 추가해보세요.',
      done: false,
    },
    {
      id: 'todo-2',
      doit: '두 번째 할 일을 추가해보세요.',
      done: true,
    },
  ],
}

// 프로바이더 래퍼 컴포넌트
export default function TodoListProvider({
  children,
  persist = false,
}: PropsWithChildren<{ persist?: boolean }>) {
  // 리듀서(Reducer)를 사용해
  // 컨텍스트 상태 및 상태 업데이트 로직
  const [state, dispatch] = useImmerReducer(todoListReducer, initialState, init)

  // 부수 효과(Side effects)
  // 컨텍스트 상태가 변경될 때 마다, 스토리지에 데이터 저장
  useEffect(() => {
    if (persist) {
      setTodoListStorageData(state)
    } else {
      removeTodoListStorageData()
    }
  }, [state, persist])

  // 컨텍스트를 사용해 컨텍스트 내부의 모든 컴포넌트에
  // 컨텍스트 값으로 공급

  const todoListStore = {
    state,
    add: (newDoIt: Todo['doit']) => dispatch(addAction(newDoIt)),
    remove: (removeTodoId: Todo['id']) => dispatch(removeAction(removeTodoId)),
    toggle: (toggleTodoId: Todo['id']) => dispatch(toggleAction(toggleTodoId)),
    edit: (editTodoId: Todo['id'], newDoIt: Todo['doit']) =>
      dispatch(editAction(editTodoId, newDoIt)),
  }

  return (
    <TodoListContext.Provider value={todoListStore}>
      {children}
    </TodoListContext.Provider>
  )
}

// 컨텍스트 내부에서 사용 가능한 커스텀 훅 (컨텍스트 값 가져오기)
// eslint-disable-next-line react-refresh/only-export-components
export const useTodoList = () => {
  const todoListState = useContext(TodoListContext)

  if (!todoListState) {
    throw new Error(
      'useTodoList 훅은 TodoListProvider 내부에서 사용해야 합니다.'
    )
  }

  return todoListState
}
