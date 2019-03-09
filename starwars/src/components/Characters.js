import React from 'react';
import Character from "./Character";

const Characters = ({characters}) => {
    return (
        characters.map((character, idx) => {
            return <Character key={`character${idx}`} character={character}/>
        })
    )
}

export default Characters;