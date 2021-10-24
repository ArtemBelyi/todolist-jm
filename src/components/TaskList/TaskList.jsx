import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ taskList, deleteTask }) => {
  const elem = taskList.map((item) => {
    const { id, ...prop } = item;
    return <Task key={id} {...prop} deleteTask={() => deleteTask(id)} />;
  });
  return <ul className="todo-list">{elem}</ul>;
};
TaskList.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TaskList;
