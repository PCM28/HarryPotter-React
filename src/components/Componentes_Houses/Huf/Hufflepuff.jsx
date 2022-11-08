import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Hufflepuff.scss'

const Hufflepuff=()=> {
  const [characters, setCharacters] = useState([])
  const getCharacters = async() =>{
        const res = await axios.get(`https://hp-api.herokuapp.com/api/characters`)
        setCharacters(res.data)
  }

  useEffect(()=>{
        getCharacters()
  },[])

  const HafCharacters = characters.filter((character)=>{
    if(character.house === "Hufflepuff" && character.image) return character
  })
  return (
    <div className='WizardWorld'>
    <div className='WizardClass'>
      {HafCharacters .map((character)=>{
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

export default Hufflepuff