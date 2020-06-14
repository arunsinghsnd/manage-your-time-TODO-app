import React, { Component } from 'react';


import TaskInput from '../TimeTaskEntry/TaskInput';
import TaskList from '../TimeTaskEntry/TaskList';

import "bootstrap/dist/css/bootstrap.min.css";
import Timer from '../Timer/Timer';

class Work extends Component{
    state = {
        items: [],
        id: 0,
        item: "",
        editItem: false
      };
      handleSubmit = e => {e.preventDefault();
    
        const newItem = {
          id: this.state.id,
          title: this.state.item
        };
        const updatedItems = [...this.state.items, newItem];
        this.setState({
          items: updatedItems,
          item: "",
          id: this.state.id + 1,
          editItem: false
        });
      };
      handleChange = e => {
        this.setState({
          item: e.target.value
        });
      };
      handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
          items: filteredItems
        });
      };
      clearList = () => {
        this.setState({
          items: []
        });
      };
      handleEdit = id => {
        const selectedItem = this.state.items.find(item => item.id === id);
        const filteredItems = this.state.items.filter(item => item.id !== id);
        console.log(selectedItem);
    
        this.setState({
          editItem: true,
          item: selectedItem.title,
          items: filteredItems
        });
      };

      render(){
          return(
            <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center">ADD TASK and Time Input</h3>
                <TaskInput
                  handleSubmit={this.handleSubmit}
                  item={this.state.item}
                  handleChange={this.handleChange}
                  editItem={this.state.editItem}
                />
                <Timer/>
                <TaskList
                  items={this.state.items}
                  handleDelete={this.handleDelete}
                  clearList={this.clearList}
                  handleEdit={this.handleEdit}
                />
              </div>
            </div>
          </div>
          );
      }
} 

export default Work;