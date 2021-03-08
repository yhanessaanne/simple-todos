import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'Finish Homework',
      'Sleep',
      'Go outside',
      'Make tea',
      'Feed dog',
      'Shower',
      'Study'
    ].forEach(insertTask)
  }
});