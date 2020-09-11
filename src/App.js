import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  //setting inital state here to empty array
  const [charactersData, setCharactersData] = useState()
 

 useEffect(() => {
   axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharactersData(response.data.results); //Array of Objs
      })
      .catch(error => {
        console.log('ERROR when geting data from API: ', error);
        debugger;
      });
  }, [setCharactersData]);
  

console.log('outside the loop data pls god: ',charactersData)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {charactersData.map(singleCharacter => {
        return <Character singlecharacter={singleCharacter} />
      })} */}
      <Character charactersData={charactersData} />
    </div>
  );
}

export default App;
