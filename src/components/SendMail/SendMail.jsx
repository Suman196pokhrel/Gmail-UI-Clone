import React, { useState } from 'react'
import "./SendMail.css"

// MUI UTILS 
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import {db} from '../../utils/firebaseConfig'
import { serverTimestamp, doc, setDoc , addDoc, collection} from 'firebase/firestore';


const SendMail = () => {
    
    const {register, handleSubmit, watch, errors} = useForm()
    const dispatch = useDispatch()
    const onSubmit =(data)=>{
       
        const myData = {
            message:data.message,
            subject: data.subject,
            toEmail: data.toEmail,
            timeStamp:serverTimestamp()
        }
        
        // Adding to an existing Collection (useAdd doc if you dont want to generate unique ID youself everytime you adda document)
        addDoc(collection(db,"emails"), myData)
        .then(()=>{
            console.log("Document sucessfully written!")
        })
        .catch((error)=>{
            console.log("Erroe writing document", error)
        })
        dispatch(closeSendMessage())
    }

    return (
        <div className='sendMail'>

            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton onClick={()=> dispatch(closeSendMessage())}>
                    <CloseOutlinedIcon className='sendMail__close' fontSize='small'  />
                </IconButton>

            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                type="text" 
                placeholder='To ' 
                {... register("toEmail", {required:true})}/>

                <input 
                type="text" 
                placeholder='Subject :' 
                {... register("subject",{required:true})}/>
                <input 
                type="text" 
                placeholder='' 
                className='sendMail__message' 
                {... register("message",{required:true})}/>


                <div className="sendMail__options">
                    <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send <ArrowDropDownOutlinedIcon sx={{ marginLeft: "10px" }} /></Button>

                    <div className="sendMail_options_right">
                        <IconButton>
                            <FormatColorTextOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <AttachFileOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <LinkOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <SentimentSatisfiedOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <AddToDriveOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <ImageOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlinedIcon fontSize='small' className='send_options_btns' />
                        </IconButton>
                    </div>
                </div>

            </form>


        </div>
    )
}

export default SendMail;
