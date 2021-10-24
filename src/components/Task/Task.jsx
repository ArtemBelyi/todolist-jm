import React from 'react';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
  };

  state = { isCompleted: false };

  onCompletedClick = () => {
    this.setState((state) => ({
      isCompleted: !state.isCompleted,
    }));
  };

  render() {
    const { description, deleteTask } = this.props;
    let className = '';
    const { isCompleted } = this.state;
    if (isCompleted) className += 'completed';

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.onCompletedClick} />
          <label>
            <span className="description">{description}</span>
            <span className="created">create 5 days ago</span>
          </label>
          <button className="icon icon-edit" label="edit" type="button" />
          <button className="icon icon-destroy" label="destroy" type="button" onClick={deleteTask} />
        </div>
      </li>
    );
  }
}
