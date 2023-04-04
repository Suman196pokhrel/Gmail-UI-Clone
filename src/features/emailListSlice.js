import { createSlice } from '@reduxjs/toolkit';


export const mailListSlice = createSlice({
  name: 'mailList',
  initialState: {
    list: "",
    page: "inbox"
  },

  reducers: {
    setList: (state, action) => {
      state.list = action.payload

    },
    setPage :(state,action)=>{
      state.page = action.payload
    }

  }
});


export const { setList , setPage} = mailListSlice.actions;
export const selectList = (state) => state.mailList.list
export const selectPage = (state)=> state.mailList.page
export default mailListSlice.reducer;





