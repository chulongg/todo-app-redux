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

export const searchFilterStatusChange = (text) => {
    return {
        type: "filter/searchStatusChange",
        payload: text,
    };
};
