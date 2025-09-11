// 할 일 인터페이스 선언
export interface Todo {
  id: string
  doit: string
  done: boolean
}

// 컨텍스트 값 타입 선언
export interface TodoListContextValue {
  state: { todos: Todo[] }
  add: (newDoIt: Todo['doit']) => void
  remove: (removeTodoId: Todo['id']) => void
  toggle: (removeTodoId: Todo['id']) => void
}
