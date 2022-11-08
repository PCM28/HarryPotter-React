import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Slytherin.scss'
const Slytherin=()=> {
  const [characters, setCharacters] = useState([])
  const getCharacters = async() =>{
        const res = await axios.get(`https://hp-api.herokuapp.com/api/characters`)
        setCharacters(res.data)
    }
    useEffect(()=>{
        getCharacters()
    },[])

    const SlyCharacters = characters.filter((character)=>{
      if(character.house === "Slytherin" && character.image) return character
    })
  return (
    <div className='WizardWorld'>
      <div className='WizardClass'>
        {SlyCharacters.map((character)=>{
            return (//Todo lo que está metido es un bucle
              <div className='Wizard'>
                <h2>{character.name}</h2>
                <img width="100px" src={character.image}/>
                <h3>{character.house}</h3>
              </div>
            )
        })}
      </div>
    </div>
    
  )
}

export default Slytherin