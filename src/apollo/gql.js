import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;

export const NEW_TODO = gql`
  mutation CreateTodo($title: String!, $userId: ID!, $completed: Boolean!) {
    newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, completed: $completed) {
      title
      id
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;
