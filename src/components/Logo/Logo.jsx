import React from 'react'
import {Link} from 'react-router-dom'
import './Logo.scss'
const Logo=()=> {
  return (
    <div>
      <Link to="/"><img width='500px' src='https://www.themoviedb.org/t/p/original/i7fk5KWLWZIpMTPICGr9t8Wcrpc.png'/></Link>
    </div>
  )
}

export default Logo