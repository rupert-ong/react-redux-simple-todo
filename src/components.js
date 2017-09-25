import React from 'react';

export function Todo(props) {
  const { todo, editSubmit, editOff } = props;

  const onFocus = event => {
    event.target.select();
  };

  const onSubmit = id => event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = event.which == 13;
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      editSubmit(id, input.value);
      editOff();
    }
  };

  if (todo.isEdit) {
    return <input type='input' defaultValue={todo.text} autoFocus onFocus={onFocus} onKeyDown={onSubmit(todo.id)} onBlur={editOff}/>
  } else if (todo.isDone) {
    return <strike>{todo.text}</strike>
  } else {
    return <span>{todo.text}</span>
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, deleteTodo, clearAllTodo, editTodo, setEditTodoTrue, setEditTodoFalse } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  const deleteClick = id => event => deleteTodo(id);

  const editClick = id => event => { event.stopPropagation(); setEditTodoTrue(id); }

  const clearList = event => clearAllTodo();

  const editOff = event => setEditTodoFalse();

  return (
    <div className='todo'>
      <div className='todo__container'>
        <input type='text' className='todo__entry' placeholder='Add todo' onKeyDown={onSubmit} />
        <button className='todo__button todo__button--danger' onClick={clearList}>Clear List</button>
      </div>
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')} className='todo__item' onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} editOff={editOff} editSubmit={editTodo}/>
            { !t.get('isEdit') &&
              <button className='todo__button' onClick={editClick(t.get('id'))}>Edit</button>
            }
            <button className='todo__button' onClick={deleteClick(t.get('id'))}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}