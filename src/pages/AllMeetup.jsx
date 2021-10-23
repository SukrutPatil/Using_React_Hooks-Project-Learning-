import React from 'react'
import MeetupList from '../components/meetup/MeetupList'
import { useState, useEffect } from 'react'



const AllMeetup = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://react-2ea1c-default-rtdb.firebaseio.com/meetups.json').then((responce)=>{
      return responce.json();
    }).then((data) =>{
      const meetups =[]
      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])

  if(isLoading){
    return (
      <div>
          <h1>Loading...</h1>
      </div>
  )
  }

  return (
    <div>
        <h1>All Meetup</h1>
        <MeetupList meetups={loadedMeetups}/>
    </div>
)
}

export default AllMeetup
