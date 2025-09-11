// 할 일 인터페이스 선언
export interface Todo {
  id: string
  doit: string
  done: boolean
}

// 컨텍스트 값 타입 선언
export interface TodoListContextValue {
  state: { todos: Todo[]; search: string; hiddenDoneTodos: boolean }
  add: (newDoIt: Todo['doit']) => void
  remove: (removeTodoId: Todo['id']) => void
  toggle: (toggleTodoId: Todo['id']) => void
  edit: (editTodoId: Todo['id'], newDoIt: string) => void
  search: (searchTerm: string) => void
  hidden: (hiddenDoneTodos: boolean) => void
}
