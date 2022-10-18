import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProducts = createAsyncThunk(
    'products/fetchByIdStatus',
    async () => {
      const {data} = await axios.get("https://api.sampleapis.com/coffee/hot")
      return data
    }
  )

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data:[],
    status:null

  },
  reducers: {
    // delete(state,action){
     
    // state.data.filter(el=>el.id!==action.payload)
    // }
  },
  extraReducers:{
    [fetchProducts.fulfilled]: (state,action)=>{
        state.data=action.payload
        state.status="sucess"
    },
    [fetchProducts.pending]: (state)=>{
        state.status="loading"
    },
    [fetchProducts.rejected]: (state)=>{
        state.status="failed"
    },
  },


})
// export const {delete}=productsSlice.actions
export default productsSlice.reducer

