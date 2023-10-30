import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, customFetch, getUserFromLocalStorage } from '../../utils';


const initialState = {
  isLoading: false,
  user:getUserFromLocalStorage(),
};



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
      try {
        const resp = await customFetch.post('/register', user);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
    }
  );
  export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
      try {
        const resp = await customFetch.post('/login', user);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
    }
  );
  const userSlice = createSlice({
    name: 'user',
    initialState,
    

    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state,{payload}) => {
          const user = payload;
          
          state.isLoading = false;
          state.user = user
          addUserToLocalStorage(user);
          
        //   toast.success(`Hello There ${user.firstName}`);
        })
        .addCase(registerUser.rejected, (state,action) => {
          state.isLoading = false;
          
          
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state,{payload}) => {
          const user = payload;
          
          state.isLoading = false;
          state.user = user
          addUserToLocalStorage(user)
        //   toast.success(`Welcome Back `);
        })
        .addCase(loginUser.rejected, (state) => {
          state.isLoading = false;
          toast.error('invalid credential');
        })
      
    },
  
    
  });

export default userSlice.reducer;