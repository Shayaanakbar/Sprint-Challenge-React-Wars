import React from 'react';
import Character from "./Character";

const Characters = ({characters}) => {
    return (
        <div className="Characters">
            {characters.map((character, idx) => {
                return <Character key={`character${idx}`} character={character}/>
            })}
        </div>
    )
}

export default Characters;