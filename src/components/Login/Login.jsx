import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { provider, auth } from '../../utils/firebaseConfig'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const Login = () => {

    const dispatch = useDispatch()
    const signIn = ()=>{
       
        signInWithPopup(auth, provider)
        .then((result)=>{
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken
     
         const user = result.user;
        //  console.log(user)
         dispatch(login({
             displayName: user.displayName,
             email: user.email,
             photoURL: user.photoURL
         }))
     
     
        })
        .catch((error)=>{
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode, errorMessage)
        })
    }


  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" 
            alt="" />
            <Button variant='contained' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login