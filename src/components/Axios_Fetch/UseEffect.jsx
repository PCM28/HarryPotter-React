import React, { useEffect, useState } from 'react'
import './UseEffect.scss';
const UseEffect=()=> {
    const [movies, setMovies] = useState()
    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films/").then((res) => res.json()).then((res)=>{ setMovies(res)})
    }, [])
  return (
    <div className='cartelera'>
        {movies && movies.map((movie)=>{
            return (
                <div className='movie' key={movie.title}>
                    <img width="100px" src={movie.image} alt={movie.title}/>
                </div>
            )
        })}
    </div>
  )
}

export default UseEffect