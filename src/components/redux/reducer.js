const initValue = {
    filters: {
        search: "",
        status: "All",
        priority: [],
    },
    todoList: [
        { id: "1", name: "Learn Yoga", completed: false, priority: "Low" },
        { id: "2", name: "Learn JS", completed: false, priority: "Hight" },
        { id: "3", name: "Learn HTML", completed: false, priority: "Medium" },
        { id: "4", name: "Learn CSS", completed: false, priority: "Low" },
        { id: "5", name: "Learn Yoga1", completed: false, priority: "Low" },
        { id: "6", name: "Learn JS2", completed: false, priority: "Hight" },
        { id: "7", name: "Learn HTML3", completed: false, priority: "Medium" },
        { id: "8", name: "Learn CSS4", completed: false, priority: "Low" },
    ],
};

const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case "filter/searchTextChange":
            return {
                ...state,
                filters: { ...state.filters, search: action.payload },
            };
        case "filter/searchStatusChange":
            return {
                ...state,
                filters: { ...state.filters, search: action.payload },
            };
        default:
            return state;
    }
};

export default rootReducer;
