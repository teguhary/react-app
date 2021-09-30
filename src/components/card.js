import React from 'react';

function Card(props) {
    return(
        <div className="card">
            <img className="card-img-top" src="http://placekitten.com/300/200" placeholder="kitten image"></img>
            <div className="card-body">
                <h4>First Post</h4>
                <small className="text-muted">Author, Published 7 Okt 2021</small>
             </div>
        </div>
    )
}

export default Card;