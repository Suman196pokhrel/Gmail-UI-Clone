import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState :{
    sendMessageIsOpen : false,
    selectedMail : null
  },

  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false
    },
    selectedMail:(state, action)=>{
      state.selectedMail = action.payload
    }

  },

});


export const { openSendMessage, closeSendMessage , selectedMail} = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectOpenMail = (state )=> state.mail.selectedMail
export default mailSlice.reducer;





