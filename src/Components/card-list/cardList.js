import React from 'react';
import './cardList.css';
import Card from '../card/card';

const cardList = (props) => {
    return(
        <div className="cardList">
            {props.monsters.map((monsters) => {
                return <Card key={monsters.id} monsters={monsters} />
            })}
        </div>
    );
}

export default cardList;