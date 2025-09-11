import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { tw } from '@/utils'
import { useTodoList } from '../../context'
import type { Todo } from '../../types'
import S from './style.module.css'

export default function TodoItem({ item }: { item: Todo }) {
  const { remove, toggle, edit } = useTodoList()
  const handleRemoveTodo = () => remove(item.id)
  const handleToggleTodo = () => toggle(item.id)

  const editInputRef = useRef<HTMLInputElement>(null)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleSave = useCallback(() => {
    const editInput = editInputRef.current
    if (editInput) edit(item.id, editInput.value)
    setEditMode(false)
  }, [edit, item.id])

  useEffect(() => {
    const editInput = editInputRef.current
    const handleKeyControls = ({ key }: globalThis.KeyboardEvent) => {
      if (key === 'Enter') handleSave()
      if (key === 'Escape') setEditMode(false)
    }

    if (editMode) {
      if (editInput) {
        editInput?.select()
        editInput?.addEventListener('keydown', handleKeyControls)
      }
    } else {
      editInput?.removeEventListener('keydown', handleKeyControls)
    }
  }, [editMode, handleSave])

  const handleEditModeOn = () => setEditMode(true)

  if (editMode) {
    return <EditMode ref={editInputRef} item={item} onSave={handleSave} />
  }

  return (
    <li className={S.listItem}>
      <div className={tw(S.formControl, 'form-control row h-11')}>
        <input
          id={item.id}
          type="checkbox"
          // defaultChecked={item.done}
          checked={item.done}
          onChange={handleToggleTodo}
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
      <button
        onClick={handleEditModeOn}
        className="button"
        type="button"
        data-button-edit
      >
        수정
      </button>
      <button
        className="button"
        type="button"
        onClick={handleRemoveTodo}
        data-button-delete
      >
        삭제
      </button>
    </li>
  )
}

function EditMode({
  ref: inputRef,
  item,
  onSave,
}: {
  ref: RefObject<HTMLInputElement | null>
  item: Todo
  onSave: () => void
}) {
  return (
    <li className={S.listItem} data-list-item-edit-mode>
      <div className={tw(S.formControl, 'form-control row')}>
        <input
          ref={inputRef}
          id={item.id}
          type="text"
          defaultValue={item.doit}
        />
      </div>
      <button
        className="button"
        type="button"
        onClick={onSave}
        data-button-save
      >
        저장
      </button>
    </li>
  )
}
