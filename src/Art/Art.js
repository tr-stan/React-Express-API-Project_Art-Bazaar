import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// this component creates the list of pieces of art
const Art = (props) => {
    const worksList = props.works.map((piece, index) => {
        return 	<li className='card' key={index}>
					<h2>{piece.name}</h2>
                    <p>{piece.price}</p>
                    <p>{piece.description}</p>
					<button><Link to={{pathname:`/artists/${piece.public_id}/${piece.first_name}-${piece.last_name}/art/${piece.id}`}}>Learn More</Link></button>
				</li>
    })
    return (
        <ul className='main'>
           {worksList}
        </ul>
    )
}

export default Art