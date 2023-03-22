const initValue = {
    search: "",
    status: "All",
    priority: [],
};

const filtersReducer = (state = initValue, action) => {
    switch (action.type) {
        case "filter/searchTextChange":
            return { ...state, search: action.payload };
        case "filter/searchStatusChange":
            return { ...state, status: action.payload };
        case "filter/searchPiorityChange":
            return { ...state, priority: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;
