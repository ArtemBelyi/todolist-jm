import React from 'react';

const TaskFilter = () => (
  <ul className="filters">
    <li>
      <button className="selected" label="All" type="button">
        All
      </button>
    </li>
    <li>
      <button label="Active" type="button">
        Active
      </button>
    </li>
    <li>
      <button label="Completed" type="button">
        Completed
      </button>
    </li>
  </ul>
);
export default TaskFilter;
