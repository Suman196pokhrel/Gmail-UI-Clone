import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userSlice from '../features/userSlice';
import mailListReducer from '../features/emailListSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userSlice,
    mailList:mailListReducer
  },
  devTools: true
});
