import { gql } from '@apollo/client';

export const TODO_LIST = gql`
  query AllTodos {
    todos: allTodos {
      id: user_id
      title
      completed
    }
  }
`;
