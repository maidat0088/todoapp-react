import React from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TodoItemContainer = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
  justify-content: space-between;
  border-top: 2px solid #000000;
  background-color: ${({ item }) => (item.status === "Init" ? "#ffffff" : "#bfbfbf")};

 
`;

const TodoItem = ({ item, updateStatusTask, removeTask }) => {
  const handleRemoveTask = (e) => {
    e.preventDefault();
    removeTask(item);
  };

  const handleCompleteTask = (e) => {
    e.preventDefault();
    console.log("handleCompleteTask " + item.name);
    updateStatusTask(item);
  };

  return (
    <TodoItemContainer item={item} uuid={item.id}>
      <div
        css={css`
          flex-grow: 1;
          cursor: pointer;
          text-decoration: ${item.status === "Init" ? "none" : "line-through"};
 
        `}
        onClick={handleCompleteTask}
      >
        <span
          css={css`
            padding: 0 5px;
            visibility: ${item.status === "Init" ? "hidden" : "none"};
          `}
        >
          <i class="fas fa-check"></i>
        </span>
        <span>{item.name}</span>
      </div>

      <button
        css={css`
          border: none;
          background: none;
          font-size: 1rem;
          cursor: pointer;
          color: #7790a0;
        `}
        onClick={handleRemoveTask}
      >
        <i class="far fa-times-circle"></i>
      </button>
    </TodoItemContainer>
  );
};

export default TodoItem;
