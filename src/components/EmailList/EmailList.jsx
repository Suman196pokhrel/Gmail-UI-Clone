import { CheckBox } from '@mui/icons-material'
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
import { Timestamp, collection, getDoc, getDocs } from "firebase/firestore"
import { db } from '../../utils/firebaseConfig';

const EmailList = () => {
  const [emailList, setEmailList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Custom Function to get Docs 
    const getAllDocuments = async (collectionName) => {
      const querySnapShot = await getDocs(collection(db, collectionName));
      const documents = querySnapShot.docs.map((doc) => doc.data());
      return documents
    }
    const collectionName = "inboxEmails";

    getAllDocuments(collectionName)
      .then((documents) => {
        setEmailList(documents)
        setIsLoading(false)
        console.log("Documents fetched !!")
        console.log(documents)
      })
      .catch((error) => {
        console.log("error getting documents ", error)
      })


  }, [])

  return (<> {isLoading ? (
    <div className="loadingAnimation">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5d79bf38627007.5809c7eab2bee.gif" alt="Gmail logo animating" />
    </div>
  ) : (
    <div className='emailList'>

      <div className="emailList__settings">

        <div className="emailList__settingsLeft">
          <IconButton>
            <CheckBox />
            <ArrowDropDownIcon />
          </IconButton>

          <IconButton>
            <RefreshOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>

        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} color='rgb(12, 93, 254)' title='Primary' selected={true} />
        <Section Icon={LocalOfferOutlinedIcon} color='rgb(12, 93, 254)' title='Promotions' selected={false} />
        <Section Icon={PeopleAltOutlinedIcon} color='rgb(12, 93, 254)' title='Socials' selected={false} />

      </div>

      <div className="emailList__list">
        {emailList.map((email, ind) => {
          
         return <EmailRow key={ind} title={email.fromEmail} subject={email.subject} description={email.message} time={new Date(email.timeStamp?.seconds *1000).toUTCString()} />

        })}



      </div>

    </div>
  )}

  </>
  )
}

export default EmailList