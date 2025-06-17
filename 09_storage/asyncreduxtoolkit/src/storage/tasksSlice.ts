import { createSlice } from "@reduxjs/toolkit";
export interface Task {
    id :string;
    title:string;
    completed:string;
}

interface TasksState{
    tasks:Task[];
    status:'idle' | 'loading' | 'succeeded' | 'failed';
    error:string | null;
}

const initialState: TasksState={
    tasks:[],
    status:'idle',
    error: null,
}
const tasksSlice = createSlice({
    name:'tasks',
    initialState:{},
    reducers:{}
});

export default tasksSlice.reducer;