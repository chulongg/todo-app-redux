import { combineReducers } from "redux";

import filtersReducer from "../Filters/FiltersReducer";
import todoListReducer from "../TodoList/TodoListReducer";

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});
export default rootReducer;
