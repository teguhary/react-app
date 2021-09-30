import React from 'react';

function Card(props) {
    return(
        <div className="card">
            <img className="card-img-top" src={props.content.imageUrl} alt="kitten"></img>
            <div className="card-body">
                <h4>{props.content.title}</h4>
                <small className="text-muted">{props.content.author}, Published {props.content.published}</small>
             </div>
        </div>
    )
}

export default Card;