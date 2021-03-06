import { atom } from "recoil";

export type TodoItem = {
  id: number;
  isComplete: boolean;
  text: string;
};

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show all",
});
