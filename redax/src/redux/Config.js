import { configureStore } from '@reduxjs/toolkit';

const CounterLogic = (state = 1, action) => {
    switch (action.type) {
        case "add":
            return state * 78;
        case "sub":
            return state - 1;
        default:
            return state; // Return the current state if no action matches
    }
};

export const myStore = configureStore({
    reducer: {
        "counter": CounterLogic,
    }
});
