import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=> {
  return (
    <div className='navBar'>
        <Link to="/gryffindor"><img width='120px' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/946397ca-37b3-4eed-9a27-6182d454e626/de0kjre-c20de09d-c0b8-4c67-b4b1-292217d2db93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0NjM5N2NhLTM3YjMtNGVlZC05YTI3LTYxODJkNDU0ZTYyNlwvZGUwa2pyZS1jMjBkZTA5ZC1jMGI4LTRjNjctYjRiMS0yOTIyMTdkMmRiOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xC29ZjndzWaSPWaQaSvq3CDkICZkJ6M1a5OZ-QCuRoc'/></Link>
        <Link to='/slytherin'><img width='240px' src='https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Symbol.png'/></Link>
        <Link to='/ravenclaw'><img width='220px' src='https://freepngimg.com/thumb/harry_potter/111745-house-ravenclaw-download-hq.png'/></Link>
        <Link to='/hufflepuff'><img width='110px' src='https://www.nicepng.com/png/full/43-439104_hufflepuff-crest-harry-potter-banner-harry-potter-hufflepuff.png'/></Link>
    </div>
  )
}

export default NavBar