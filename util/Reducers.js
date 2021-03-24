const setStateAndLocStorage = (currentState) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("state", JSON.stringify(currentState));
    }
    return currentState;
};

const Reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return setStateAndLocStorage({...state, dark: action.payload});
        default:
            throw new Error();
    }
};

export default Reducer;
