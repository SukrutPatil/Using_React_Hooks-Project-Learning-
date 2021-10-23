import React from 'react'
import {useContext} from 'react'
import FavoriteContext from '../store/favorite-context'
import MeetupList from '../components/meetup/MeetupList'


const Favorites = () => {
    const favoriteCntx = useContext(FavoriteContext);





    return (
        <div>
            <h1> Favorites</h1>
            <MeetupList meetups={favoriteCntx.favorites}></MeetupList>
        </div>
    )
}

export default Favorites
