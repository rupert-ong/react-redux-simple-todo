// Create unique id (simple hack)
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      isEdit: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    payload: {
      id: id,
      text: text
    }
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}

export function clearAllTodo() {
  return {
    type: 'CLEAR_ALL_TODO'
  };
}

export function setEditTodoTrue(id) {
  return {
    type: 'EDIT_TODO_TRUE',
    payload: id
  }
}

export function setEditTodoFalse() {
  return {
    type: 'EDIT_TODO_FALSE'
  }
}