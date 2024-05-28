import React, { useState } from "react";
import "./App.css";
import { FaTrashAlt } from "react-icons/fa";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [todoToDelete, setTodoToDelete] = useState(null); // State to store the index of the todo to be deleted

  const notifyAdd = () => {
    toast.success("Add Successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyDelete = () => {
    toast.error("Delete Successful!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // User input
    const userInput = event.target.elements.todo.value;

    if (userInput.trim()) {
      // Add new todo to the list
      setTodos([...todos, userInput]);
      // Clear the input field
      event.target.elements.todo.value = "";
      // Notify success
      notifyAdd();
    }
  };

  const handleDelete = () => {
    if (todoToDelete !== null) {
      const newArray = todos.filter((item, index) => index !== todoToDelete);
      setTodos(newArray);
      setTodoToDelete(null);
      notifyDelete();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Todo Lists</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            name="todo"
            placeholder="Enter a new task"
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
          <ToastContainer />
        </div>
      </form>

      <div className="todo-list">
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo}
              <button
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setTodoToDelete(index)}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Confirm Deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this todo?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
