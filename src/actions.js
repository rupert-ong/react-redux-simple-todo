// Create unique id (simple hack)
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
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

export function clearAllTodo(){
  return {
    type: 'CLEAR_ALL_TODO',
    payload: ''
  };
}