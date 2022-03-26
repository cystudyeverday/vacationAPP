import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fromJS } from 'immutable'
import { set } from '../utils/reducers'


const initialState = fromJS({
    username: '',
    password: ''
})
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // set(state: RootState, payload: PayloadAction<any>),


    },
    // extraReducers:build=>{
    //     build.addCase('set',set)
    // },
})