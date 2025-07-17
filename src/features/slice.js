import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('createUser', async (data, {rejectWithValue})=>{

    try{
        let response = await fetch('https://6581b6523dfdd1b11c4400e7.mockapi.io/project01', {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        response = await response.json();
        return response;
        
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getUser = createAsyncThunk('getUser', async(arg, {rejectWithValue})=>{

    try{
        let response = await fetch('https://6581b6523dfdd1b11c4400e7.mockapi.io/project01', {
            method:'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
        });

        response = await response.json();
        console.log(response)
        return response;
        
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getUserById = createAsyncThunk('userById', async(id, {rejectWithValue})=>{

    let response = await fetch(`https://6581b6523dfdd1b11c4400e7.mockapi.io/project01/${id}`, {
        mwthod:'GET',
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    response = await response.json();
    return response;
})

export const deleteUser = createAsyncThunk('deleteUser', async (id, {rejectWithValue})=>{

    try{
            let response = await fetch(`https://6581b6523dfdd1b11c4400e7.mockapi.io/project01/${id}`, {
                method:'DELETE',
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            response = await response.json();
            return response;
    }
    catch(error){
        return rejectWithValue(error.message);
    }
})

export const editUser = createAsyncThunk('editUser', async(data, {rejectWithValue})=>{

    try{
            let response = await fetch(`https://6581b6523dfdd1b11c4400e7.mockapi.io/project01/${data.id}`, {
                method:'PUT',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            });

            response = await response.json();

            return response;
    }
    catch(error){
            return rejectWithValue(error.message);
    }
})

export const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        loading:false,
        users:[],
        error:null,
        uniqueUser:null
    },
    extraReducers: builder => {
            builder.addCase(createUser.pending, (state)=>{
                    state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action)=>{
                    state.loading = false;
                    state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action)=>{
                    state.loading = false;
                    state.error = action.payload
            })
            .addCase(getUser.pending, (state)=>{
                    state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action)=>{
                    state.loading = false;
                    state.users = action.payload
            })
            .addCase(getUser.rejected, (state, action)=>{
                    state.loading = false;
                    state.error = action.payload
            })
            .addCase(deleteUser.pending, (state, action)=>{
                    state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action)=>{
                    state.loading = false;
                    const {id} = action.payload;
                    const updated = state.users?.filter((items)=> items.id !== id);
                    state.users = updated
            })
            .addCase(deleteUser.rejected, (state, action)=>{
                    state.loading = false;
                    state.error = action.payload
            })
            .addCase(getUserById.pending, (state, action)=>{
                    state.loading = true;
            })
            .addCase(getUserById.fulfilled, (state, action)=>{
                    state.loading = false;
                    state.uniqueUser = action.payload;
            })
            .addCase(getUserById.rejected, (state, action)=>{
                    state.loading = false;
                    state.error = action.payload
            })
            .addCase(editUser.pending, (state, action)=>{
                    state.loading = true;
            })
            .addCase(editUser.fulfilled, (state, action)=>{
                    state.loading = false;
                    const idx = state.users.findIndex((items)=> items.id === action.payload.id);
                    state.users[idx] = action.payload
            })
            .addCase(editUser.rejected, (state, action)=>{
                    state.loading = false;
                    state.error = action.payload
            })
            
        }
})

export default userSlice.reducer;