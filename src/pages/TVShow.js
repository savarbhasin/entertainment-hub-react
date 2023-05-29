import React, { useContext , useState ,useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import useGenre from '../Hook/useGenre'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
const api_key='72f882f93d04364c2151768541b804ac'  

const TVShow = () => {
  const {posts} = useContext(AppContext)
  const {clickHandler,genreData,genres} = useGenre('tv')
  return (
    <div className='mt-2'>
      { genreData && 
        <div className='flex gap-[10px] max-w-max flex-wrap px-5'>
        {genreData.genres.map((item)=><button key={item.id} className={`rounded-2xl py-2 px-3
        ${genres.includes(parseInt(`${item.id}`)) ? 'bg-purple-700 border' : 'bg-blue-500'}`} onClick={()=>clickHandler(parseInt(`${item.id}`))}>
                {item.name}
            </button>)}
        </div>
      }
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-5'>
      {
        posts.map(item=><Card key={item.id} item={item}/>)
      }
      </div>
      <Pagination/>
      
      
      
    </div>
  )
}

export default TVShow  