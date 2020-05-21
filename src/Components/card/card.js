import React from 'react';

import './card.css';

const card = (props) => {
    return(
        <div className="cardContainer">
            <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
            <h2>{props.monsters.name}</h2>
            <p>{props.monsters.email}</p>
        </div>
    );
}

export default card;