import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Todo from './Todo';
import { TODO_LIST } from '../apollo/todos';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <Query query={TODO_LIST}>
          {({ error, loading, data }) => {
            if (this.error) {
              return <h2>Error...</h2>;
            }
            if (this.loading) {
              return <h2>Loading...</h2>;
            }
            return data.todos.map((todo) => <Todo key={todo.id} {...todo} />);
          }}
        </Query>
        ;
      </div>
    );
  }
}
