import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      task: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    console.log("object", e.target.value);
    console.log("task", this.state.task);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { task, description, list } = this.state;
    let newList = [task, description];
    console.log("task  , description , list", task, description, list);
  
    newList.push(this.state);
    this.setState({
      list: newList,
    });

    console.log("newList", list);
 
  }

  render() {
    {
      console.log("list", this.state.list);
    }


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Task</label>
          <input
            name="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <label>Description</label>
          <input
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input type="submit" value="Submit" />
        </form>

        <div>
        {this.state.list.map( item => {
          return(
<>
            <p>{item.task}</p>
            <p>{item.description}</p>
            </>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
