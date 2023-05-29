import React, { useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
const Trending = () => {
      const {posts} = useContext(AppContext) 
  return (
    <div>
       <div>
            <p className='text-4xl uppercase font-bold text-center mt-4'>Trending Movies Today!</p>   
       </div> 
       <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-5'>
            {
              posts.map(item=><Card key={item.id} item={item}/>)
            }
       </div>
       <div>
            <Pagination/>
       </div>
    </div>
  )
}

export default Trending