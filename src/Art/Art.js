import React from 'react'
import { Link } from 'react-router-dom'

// this component creates the list of pieces of art
const Art = (props) => {
    const worksList = props.works.map((piece, index) => {
        return 	<div key={index}>
					<h2>{piece.name}</h2>
                    <p>{piece.price}</p>
                    <p>{piece.description}</p>
					<button><Link to={{pathname:`/artists/${piece.public_id}/${piece.first_name}${piece.last_name}/art/${piece.id}`}}>Learn More</Link></button>
				</div>
    })
    return (
        <div>
           {worksList}
        </div>
    )
}

export default Art