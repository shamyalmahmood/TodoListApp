import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabaseClient.jsx';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (text) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ text, completed: false }]);
  if (error) throw new Error(error.message);
  return data[0];
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id, { getState }) => {
  const todo = getState().todos.todos.find(todo => todo.id === id);
  const { data, error } = await supabase
    .from('todos')
    .update({ completed: !todo.completed })
    .eq('id', id);
  if (error) throw new Error(error.message);
  return data[0];
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter: 'all',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      });
  },
});

export const { setFilter } = todoSlice.actions;
export default todoSlice.reducer;