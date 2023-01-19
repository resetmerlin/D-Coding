import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    
    <>    
    <div className='text'>

    <span > Hello,World!</span>
    
     <Link  to="/todo" >Change link to todo</Link>
    <a href='/todo'>Let's check the which is different</a>
    </div>


    </>
  )
}

export default HomeScreen