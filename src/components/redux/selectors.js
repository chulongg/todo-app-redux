import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status;
export const searchPioritySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPioritySelector,
    (todoList, searchText, searchStatus, searchPiority) => {
        return todoList.filter((todo) => {
            if (searchStatus === "All") {
                return searchPiority.length
                    ? todo.name.includes(searchText) &&
                          searchPiority.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (searchStatus === "Completed"
                    ? todo.completed
                    : !todo.completed) &&
                (searchPiority.length
                    ? searchPiority.includes(todo.priority)
                    : true)
            );
        });
    }
);
