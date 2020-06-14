import React, { Component } from "react";

export default class TaskInput extends Component {
  render() {
    const { handleSubmit, handleChange, item, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize" onChange={handleChange} value={item}
              placeholder="add time and task here..."
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block mt-3 text-capitalize btn-success"
                : "btn btn-block mt-3 text-capitalize btn-primary"
            }
            disabled={!item ? true : false}
          >
            {editItem ? "edit item" : "add input and time"}
          </button>
        </form>
      </div>
    );
  }
}