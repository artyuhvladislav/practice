import React from 'react';

const Todo = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          onToggle({
            variables: {
              id,
              completed: !completed,
            },
          });
        }}
      />
      {title}{' '}
      <button
        onClick={() => {
          onDelete({ variables: { id } });
        }}>
        х
      </button>
    </li>
  );
};

export default Todo;
