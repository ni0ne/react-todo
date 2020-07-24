import React from 'react';

import {
  Sidenav
} from 'mdc-react';

import './index.scss';

export default function TodoDetails({ todo }) {
  return (
    <aside
      className="todo-details"
    >
      {todo.title}
    </aside>
  );
}