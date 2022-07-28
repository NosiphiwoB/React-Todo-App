import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       task: "",
//       description: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       ...this.state,
//       [e.target.name]: e.target.value,
//     });
//     console.log("object", e.target.value);
//     console.log("task", this.state.task);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { task, description, list } = this.state;
//     let newList = [task, description];
//     console.log("task  , description , list", task, description, list);

//     newList.push(this.state);
//     this.setState({
//       list: newList,
//     });

//     console.log("newList", list);

//   }

//   render() {
//     {
//       console.log("list", this.state.list);
//     }

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Task</label>
//           <input
//             name="task"
//             onChange={this.handleChange}
//             value={this.state.task}
//           />
//           <label>Description</label>
//           <input
//             name="description"
//             onChange={this.handleChange}
//             value={this.state.description}
//           />
//           <input type="submit" value="Submit" />
//         </form>

//         <div>
//         {this.state.list.map( item => {
//           return(
// <>
//             <p>{item.task}</p>
//             <p>{item.description}</p>
//             </>
//           )
//         })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  // todo
  // description
  // submit
  const [state, setState] = useState({
    task: "",
    description: "",
  });

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    state.id = uuidv4();
    setList([...list, state]);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    console.log("My edit button is working");
  };

  const handleDelete = (id) => {
    let newlist = list.filter((item) => item.id !== id);
    setList([...newlist]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task
          <input
            type="text"
            name="task"
            value={state.task}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="display">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list &&
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.task}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={handleEdit}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
