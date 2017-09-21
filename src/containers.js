// Create store aware containers that wrap around existing components
// to make components aware of the store
import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, deleteTodo, clearAllTodo } from './actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    // Passed to store's dispatch method. Use it to
    // dispatch actions from our action creators
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id)),
            deleteTodo: id => dispatch(deleteTodo(id)),
            clearAllTodo: () => dispatch(clearAllTodo())
        };
    })(components.TodoList);
