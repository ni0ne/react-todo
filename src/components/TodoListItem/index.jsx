import React from 'react';
import {
  Checkbox,
  ListItem, ListItemGraphic, ListItemText
} from 'mdc-react';

import './index.scss';

export default function TodoListItem({ todo, onCompleteChange }) {
  return (
    <ListItem>
      <ListItemGraphic>
        <Checkbox
          checked={todo.completed}
          onChange={todo.onCompleteChange}
        />
      </ListItemGraphic>
      <ListItemText>{todo.title}</ListItemText>
    </ListItem>
  );
}