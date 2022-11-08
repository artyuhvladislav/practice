import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { NEW_TODO } from '../apollo/gql';
import { ALL_TODOS } from './../apollo/gql';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const [addTodo, { error }] = useMutation(NEW_TODO, {
    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODOS });
      cache.writeQuery({
        query: ALL_TODOS,
        data: {
          todos: [newTodo, ...todos],
        },
      });
    },
  });
  if (error) {
    return <h2>error...</h2>;
  }
  return (
    <>
      <input
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo({
            variables: {
              userId: Date.now(),
              title: value,
              completed: false,
            },
          });
          setValue('');
        }}>
        Add
      </button>
    </>
  );
};

export default AddTodo;
