import { useTodoList } from '../../context'
import TodoItem from '../todo-item'
import S from './style.module.css'

export default function TodoList() {
  const { todos } = useTodoList()

  return (
    <section>
      <h2 className="sr-only">할 일 목록</h2>
      <ul className={S.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    </section>
  )
}
