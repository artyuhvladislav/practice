import React from 'react';
import { ALL_TODOS } from '../apollo/gql';
import { useQuery } from '@apollo/client';

const TotalCount = () => {
  const { data } = useQuery(ALL_TODOS);
  return data?.todos && <div>total count: {data.todos.length}</div>;
};

export default TotalCount;
