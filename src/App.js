import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { ALL_TODOS, DELETE_TODO, UPDATE_TODO } from './apollo/gql';
import { useMutation, useQuery } from '@apollo/client';
import TotalCount from './components/TotalCount';

function App() {
  const { loading, error, data } = useQuery(ALL_TODOS);
  const [toggleTodo, { error: updatedError }] = useMutation(UPDATE_TODO);
  const [deleteTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODOS });
      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: todos.filter((todo) => todo.id !== removeTodo.id),
        },
      });
    },
  });
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error || updatedError || deleteError) {
    return <h2>Error...</h2>;
  }
  return (
    <div className="App">
      <AddTodo />
      <ul>
        {data?.todos.map((todo) => (
          <Todo {...todo} key={todo.id} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
      <TotalCount />
    </div>
  );
}

export default App;
