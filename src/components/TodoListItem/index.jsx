import React from 'react';
import {
  Checkbox,
  Icon,
  IconButton,
  ListItem, ListItemGraphic, ListItemText, ListItemMeta
} from 'mdc-react';

import './index.scss';

export default function TodoListItem({ 
  todo, 
  onStatusChange,
  onDelete
}) {
  return (
    <ListItem>
      <ListItemGraphic>
        <Checkbox
          checked={todo.completed}
          onChange={onStatusChange}
        />
      </ListItemGraphic>
      <ListItemText>{todo.title}</ListItemText>

      <ListItemMeta>
        <IconButton onClick={() => onDelete(todo.id)}>
          <Icon>delete</Icon>
        </IconButton>
      </ListItemMeta>
    </ListItem>
  );
}