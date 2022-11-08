import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Axios.scss';

const Axios=()=> {
    const [films, setFilms] = useState([])//Poner el paréntesis

    const getFilms = async() =>{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)// console.log(res) puedes colocarlo en la siguiente línea en vez de tenerlo dentro del <h1>
        setFilms(res.data)
    }

    useEffect(()=>{
        getFilms()
    },[])

  return (
    <div className='cartelera'>
        <h1>{films[0].title}</h1>
        {films.map((film)=>{//films && , antes de films.map
            return (
                
                <div className='movie'>
                    <h1>{film.title}</h1>
                    <img width="100px" src={film.image}/>
                </div>
            )
        })}
    </div>
  )
}

export default Axios