import React, { useState, useEffect } from 'react';
import {
  Layout,
  Spinner
} from 'mdc-react';

import UseApi from '../hooks/api';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoDetails from '../components/TodoDetails';

import './index.scss';

export default function TodoListPage({ match }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { data: { lists, todos }, actions } = UseApi();

  useEffect(() => {

    actions.getListTodos(match.params.listId);
  }, [actions, match.params.listId]);

  function handleSubmit(title) {
    actions.createTodo({
      title,
      listId: list.id
    });
  }

  function handleDelete(todoId) {
    actions.deleteTodo(todoId);
  }

  function handleUpdate(todoId, data) {
    actions.updateTodo(todoId, data)
  }

  function handleSelect(todo) {
    setSelectedTodo(todo);
  }

  const list = lists.find(list => list.id === match.params.listId);

  if ( !list || !todos ) return <Spinner />; // change to "loading"

  return (
    <Layout id="todo-list-page" className="page" row>
      <Layout>
        <TodoList 
          list={list}
          todos={todos}
          onSelect={handleSelect}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      
        <TodoForm 
          onSubmit={handleSubmit}
        />
      </Layout>
      

      { selectedTodo &&
        <TodoDetails 
          todo={selectedTodo}
        />
      }
    </Layout>
  );
} 