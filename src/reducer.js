import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(todos = init, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    case 'EDIT_TODO':
      return todos.map(t=> {
        if(t.get('id') == action.payload.id){
          return t.update('text', text => action.payload.text);
        } else {
          return t;
        }
      });
    case 'EDIT_TODO_TRUE':
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isEdit', isEdit => true);
        } else {
          return t.update('isEdit', isEdit => false);
        }
      });
    case 'EDIT_TODO_FALSE':
      return todos.map(t => t.update('isEdit', isEdit => false));
    case 'DELETE_TODO':
      return todos.filter(t => t.get('id') !== action.payload);
    case 'CLEAR_ALL_TODO':
      return todos.clear();
    default:
      return todos;
  }
}