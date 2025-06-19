import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export interface Task {
    id :string;
    title:string;
    completed:boolean;
}

interface TasksState{
    tasks:Task[];
    status:'idle' | 'loading' | 'succeeded' | 'failed';
    error:string | null;
}

export const addTask = createAsyncThunk('tasks/addTask',async(task:Omit<Task,'id'>)=>{
    console.log(task)
    const newTask={...task,id:Date.now().toString()}
})
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