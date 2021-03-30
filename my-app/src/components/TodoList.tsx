import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./atoms";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "./atoms";

function TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {/* <TodoListStats />
        <TodoListFilters />*/}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

