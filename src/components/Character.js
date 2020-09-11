// Write your Character component here
import React from 'react';
import './App.css';
import styled from 'styled-components';

export default function Character (props) {

    return (
        <div className='characterContainer'>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.species}></img>
        </div>
    )

}
