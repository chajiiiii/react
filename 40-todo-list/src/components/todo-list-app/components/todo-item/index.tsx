import { tw } from '@/utils'
import type { Todo } from '../../types'
import S from './style.module.css'

export default function TodoItem({ item }: { item: Todo }) {
  return (
    <li className={S.listItem}>
      <div className={tw(S.formControl, 'form-control row h-11')}>
        <input
          id={item.id}
          type="checkbox"
          defaultChecked={item.done}
          data-list-item-checkbox
        />
        <label
          htmlFor={item.id}
          className={tw(S.listItemLable, 'select-none')}
          data-list-item-label
        >
          {item.doit}
        </label>
      </div>
      <button className="button" type="button" data-button-edit>
        수정
      </button>
      <button className="button" type="button" data-button-delete>
        삭제
      </button>
    </li>
  )
}

function EditMode() {
  return (
    <li className={S.listItem} data-list-item-edit-mode>
      <div className={tw(S.formControl, 'form-control row')}>
        <input id="todo-item-cjsue" type="text" defaultValue="할 일 1" />
      </div>
      <button className="button" type="button" data-button-save>
        저장
      </button>
    </li>
  )
}
