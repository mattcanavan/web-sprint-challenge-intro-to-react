// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character (props) {
    if (!props[0]) {
        return <h1>Loading...</h1>
    }

        
        const { charactersData } = props
        console.log('inside componenet: ',charactersData)
        
        return (console.log('did we get here'))
        
        // return (
        //     charactersData.map( singleCharacter => {
        //         return (
        //         <div className='characterContainer'>
        //         <h1>{singleCharacter.name}</h1>
        //         <img src={singleCharacter.image} alt={singleCharacter.species}></img>
        //         </div>
        //     )
        // })
        // )
    }

