import React from 'react'
import classes from './MeetupItems.module.css'
import Card from '../ui/Card'
import {useContext} from 'react'
import FavoriteContext from '../../store/favorite-context'

const MeetupItems = (props) => {
    const favoriteContext = useContext(FavoriteContext)

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoriteContext.removeFavorite(props.id)
        }
        else{
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }
    return (
        <li className={classes.title}>
            <Card>
            <div className={classes.image}>
            <img src={props.image} alt="" />
            </div>
            <div className={classes.content}> 
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}</button>
            </div>
            </Card>
        </li>
        
    )
}

export default MeetupItems
