import Checkbox from '@mui/material/Checkbox';
import React, { useEffect, useState } from 'react'
import "./EmailList.css"
import EmailRow from '../EmailRow/EmailRow';
import Section from '../Section/Section';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Timestamp, collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from '../../utils/firebaseConfig';
import { selectList, selectPage, setList } from '../../features/emailListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EmailList = () => {
  const [emailList, setEmailList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()
  const currentPath = history.location.pathname
  const selectedPage = useSelector(selectPage)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  // const pageSelected = useSelector()

  useEffect(() => {
    setIsLoading(true)
    // Custom Function to get Docs 
    const getAllDocuments = async (collectionName) => {
      const querySnapShot = await getDocs(collection(db, collectionName));
      const documents = querySnapShot.docs.map((doc) => doc.data());
      return documents
    }
    const collectionName = currentPath == "/" ? "inboxEmails" : "sentEmails";

    getAllDocuments(collectionName)
      .then((documents) => {
        const data = documents.map((email) => {
          return {
            title: email.title,
            description: email.message,
            subject: email.subject,
            timeStamp: new Date(email.timeStamp?.seconds * 1000).toUTCString()
          }
        })
        setIsLoading(false)
        dispatch(setList(data))
        setEmailList(documents)
        
        // console.log("Documents fetched !!")

      })
      .catch((error) => {
        console.log("error getting documents ", error)
      })


  }, [selectedPage])





  return (
    <div className='emailList'>

      <div className="emailList__settings">

        <div className="emailList__settingsLeft">
          <IconButton>
          <Checkbox {...label} size='small'/>
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RefreshOutlinedIcon  fontSize='small'/>
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon fontSize='small' />
          </IconButton>

        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon fontSize='small'/>
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon fontSize='small'/>
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} color='rgb(12, 93, 254)' title='Primary' selected={true} />
        <Section Icon={LocalOfferOutlinedIcon} color='rgb(12, 93, 254)' title='Promotions' selected={false} />
        <Section Icon={PeopleAltOutlinedIcon} color='rgb(12, 93, 254)' title='Socials' selected={false} />

      </div>

      {isLoading ? (
        <div className="loadingAnimation">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5d79bf38627007.5809c7eab2bee.gif" alt="Gmail logo animating" />
        </div>
      ) : (<div className="emailList__list">
        {emailList.map((email, ind) => {

          return <EmailRow key={ind} title={email.fromEmail || email.toEmail} subject={email.subject} description={email.message} time={new Date(email.timeStamp?.seconds * 1000).toUTCString()} />

        })}



      </div>)}


    </div>
  )
}


export default EmailList