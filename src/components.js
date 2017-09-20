import React from 'react';

export function Todo(props) {
  const { todo } = props;
  if (todo.isDone) {
    return <strike>{todo.text}</strike>
  } else {
    return <span>{todo.text}</span>
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, clearAllTodo } = props;

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

  const clearList = event => clearAllTodo();

  return (
    <div className='todo'>
      <div className='todo__container'>
        <input type='text' className='todo__entry' placeholder='Add todo' onKeyDown={onSubmit} />
        <button className='todo__button todo__button--danger' onClick={clearList}>Clear List</button>
      </div>
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')} className='todo__item' onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}