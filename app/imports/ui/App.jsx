import React from 'react';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Sleep'},
  {_id: 2, text: 'Do homework'},
  {_id: 3, text: 'Go outside'},
];

export const App = () => (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        { tasks.map(task => <Task key={ task._id } task={ task }/>) }
      </ul>
    </div>
);
