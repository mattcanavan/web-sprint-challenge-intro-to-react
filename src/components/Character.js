// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character (props) {
    const { charactersData } = props
    if (!charactersData) {
        console.log('Loading...')
        return <h1>Loading...</h1>
    }

        // console.log('inside componenet: ',charactersData)
        
        return (
            charactersData.map( singleCharacter => {
                return (
                <div className='characterContainer'>
                <NameH1><h1>{singleCharacter.name}</h1></NameH1>
                <img src={singleCharacter.image} alt={singleCharacter.species}></img>
                <TagH3>
                <h3>Status: {singleCharacter.status}</h3>
                <h3>Species: {singleCharacter.species}</h3>
                </TagH3>
                </div>
            )
        })
        )
    }

const NameH1 = styled.h1`
    font-family: serif;
    font-size: 2rem;
    text-align: center;
    text-decoration: underline;
`

const TagH3 = styled.h3`
    font-size: 1rem;
    font-style: italic;
`