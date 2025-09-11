import FilterForm from './components/filter-form'
import NewTodoForm from './components/new-todo-form'
import TodoList from './components/todo-list'
import TodoListProvider from './context'
import './style.css'

export default function TodoListApp() {
  return (
    // persist를 하면 새로고침 해도 값이 유지가 됨
    <TodoListProvider persist>
      {/* <TodoListProvider> */}
      <FilterForm />
      <NewTodoForm />
      <TodoList />
    </TodoListProvider>
  )
}
