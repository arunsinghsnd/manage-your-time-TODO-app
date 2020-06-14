import React, { Component } from "react";
import TaskItem from "./TaskItem";
export default class TaskList extends Component {
  render() {
    const { items, handleDelete, clearList, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Manage your added task  list</h3>
        {items.map(item => {
          return (
            <TaskItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
         Remove Entry
        </button>
      </ul>
    );
  }
}