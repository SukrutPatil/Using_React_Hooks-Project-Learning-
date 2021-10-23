import React from 'react'
import MeetupItems from './MeetupItems'
import classes from './MeetupList.module.css'

const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map(
                meetup => <MeetupItems 
                key = {meetup.id} 
                image = {meetup.image}
                content = {meetup.title}
                address = {meetup.address}
                description = {meetup.description}
                 />)}
        </ul>
    )
}

export default MeetupList
