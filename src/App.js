import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from "./components/Mail/Mail"
import EmailList from "./components/EmailList/EmailList"
import SendMail from './components/SendMail/SendMail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice"
import { login, selectUser } from "./features/userSlice"
import Login from './components/Login/Login';
import { auth } from './utils/firebaseConfig';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      // the user is logged in
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
    }))
    })
  },[])

  return (
    <Router>
      {!user ? (<Login />) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>

            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}

        </div>
      )}

    </Router>
  );
}

export default App;
