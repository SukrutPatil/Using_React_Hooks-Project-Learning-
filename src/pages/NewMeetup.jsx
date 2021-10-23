import React from 'react'
import NewMeetUpForm from '../components/meetup/NewMeetupForm'
import Card from '../components/ui/Card'
import {useHistory} from 'react-router-dom'



const NewMeetUp = () => {
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-2ea1c-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(()=>{
                history.replace('/');
            })

    }
    return (
        <div>
            <h1>Add New Meet Up</h1>
            <Card>
                <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
            </Card>
        </div>
    )
}

export default NewMeetUp
