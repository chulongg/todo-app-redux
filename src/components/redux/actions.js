export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const searchFilterTextChange = (text) => {
    return {
        type: "filter/searchTextChange",
        payload: text,
    };
};

export const searchFilterStatusChange = (status) => {
    return {
        type: "filter/searchStatusChange",
        payload: status,
    };
};

export const searchFilterPiorityChange = (piorities) => {
    return {
        type: "filter/searchPiorityChange",
        payload: piorities,
    };
};
