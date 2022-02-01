import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

const TodoPanelContainer = styled("div")`
  max-width: 700px;
  min-height: 135px;
  width: 480px;
  height: 400px;
  padding: 32px 34px 25px;
  border: 2px solid #000000;
`;

const TodoPanelTitle = styled("div")`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000000;
  margin-bottom: 33px;
`;

const TodoPanelControl = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 36px;
  border-radious: 5px;

  input {   
    width: 300px;
    border: 2px solid #000000;
    border-radius: 5px;

    &::placeholder {
      color: #000000;
      font-weight: normal;
      font-family: 'Tahoma', sans-serif;
      font-weight: normal;
      font-size: 13px;
    }
  }

  button {
    width: 100px;
    border: 2px solid #000000;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

const TodoPanelDetails = styled("div")`
  margin-top: 20px;
  overflow-y: auto;
  min-height: 35px;
  max-height: 215px;
  border: 2px solid #000000; 

  & > div:first-of-type {
    border-top: none;
  }
`;

const initTempTask = () => {
  let tempTask = [];
  for (let index = 0; index < 5; index++) {
    tempTask = [
      ...tempTask,
      {
        id: uuidv4(),
        name: `Task ${index + 1}`,
        status: taskStatus[0],
      },
    ];
  }
  return tempTask;
};

const taskStatus = {
  0: "Init",
  1: "Complete"
};

const TodoPanel = () => {
  const [todoList, setTodoList] = useState(() => {
    return initTempTask();
  });

  const [input, setInput] = useState("");

  const addTodoItem = (inputItem) => {
    setTodoList([...todoList, inputItem]);
  };

  const removeTodoItem = (inputItem) => {
    const removeTodoList = todoList.filter((item) => item.id !== inputItem.id);
    setTodoList(removeTodoList);
  };

  const updateStatusTodoItem = (inputItem) => {
    const updateStatusTodoList = todoList.map((item) => {
      if (item.id === inputItem.id) { 
        let newStatus = (item.status === taskStatus[0] )? taskStatus[1] : taskStatus[0];
        item.status = newStatus;
      }
      return item;
    });
    setTodoList(updateStatusTodoList);
  };

  console.log(todoList);

  const handleAddNewTodoList = (e) => {

    if(input === "") return;

    addTodoItem({
      id: uuidv4(),
      name: input,
      status: "Init",
    });

    setInput("");
  };

  return (
    <TodoPanelContainer>
      <TodoPanelTitle>TODO APP</TodoPanelTitle>

      <TodoPanelControl>
        <input
          type="text"
          placeholder="Enter your text here..."
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddNewTodoList}>Add</button>
      </TodoPanelControl>

      <TodoPanelDetails>
        {todoList &&
          todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              updateStatusTask={updateStatusTodoItem}
              removeTask={removeTodoItem}
            />
          ))}
      </TodoPanelDetails>
    </TodoPanelContainer>
  );
};

export default TodoPanel;
