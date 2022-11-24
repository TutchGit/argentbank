import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    id: ""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // { type: "user/setUser", payload: {'tony@stark.com', 'password123'}}
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.id = action.payload.id;
        },
        updateUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        logout: (state) => {
            state = initialState;
        },
    },
});

export const { setUser, updateUser, logout } = userSlice.actions;