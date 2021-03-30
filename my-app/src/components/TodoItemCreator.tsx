import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);

    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        id="todo-item-creator-text"
      />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}

let id = 0;
function getId() {
  id++;
  return id;
}
