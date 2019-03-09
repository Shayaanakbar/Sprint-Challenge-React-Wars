import React from 'react';

const Character = ({character}) => {
    console.log(character);
    return (
        <div className="Character">
            <div>{character.name}</div>
        </div>
    )
}

export default Character;