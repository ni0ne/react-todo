import React, { useState, useEffect } from 'react';

import { db } from  './firebase';

import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
    .get()
    .then(snapshot => {
      //console.log(snapshot);
      const todos = snapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(todos);
      // snapshot.forEach(doc => {
      //     // doc.data() is never undefined for query doc snapshots
      //     console.log(doc.id, " => ", doc.data());
      // });
    })
    .catch(error => {
        console.log("Error getting documents: ", error);
    });
  }, []);
  return (
    <div className="App">
      <h1>React Todo</h1>

      <ul>
        {todos.map(todo => 
          <li key={todo.id}>{todo.title}</li>
        )}
      </ul>
    </div>
  );
}
