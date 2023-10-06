import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

interface UsersState {
    // Below is an array of User objects that are type defined.
    data: User[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;

}

//UsersState is a type of the initialState
const initialState: UsersState = {
    data: [],
    status: 'idle',
    error: null,
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    //the response will be an array of users
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},

});