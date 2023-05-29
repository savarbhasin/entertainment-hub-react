import React, { useContext, useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
const Search = () => {
  const {page,fetchData,posts} = useContext(AppContext)
  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  
  useEffect(()=>{
    setName(searchParams.get('title'))
  },[location.pathname,location.search])
  function handleKeyDown(e){
    if(e.keyCode ===13){
      clickHandler()
    }
  }
  function changeHandler(e){
    setName(e.target.value)
  }
  function clickHandler(){
    navigate({search:`title=${name}`})
    fetchData(page,`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&api_key=72f882f93d04364c2151768541b804ac`)
  }
  return (
    <div className='pt-10 w-[80dvw] flex flex-col'>
      <div className='w-full rounded-2xl border flex justify-center items-center h-[70px]'>
        <input type="text" value={name} onChange={changeHandler} 
        onKeyDown={handleKeyDown}
        placeholder="Search" className='w-full bg-transparent px-10 outline-none font-mono text-4xl'/>
        <button className='outline-none w-[4rem] h-[4rem] mr-5 flex justify-center items-center text-3xl' onClick={clickHandler}>
            <BsSearch/>
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-5'>
      { 
        posts.map(item=><Card key={item.id} item={item}/>)
      }
      </div>
      
        

    </div>
  )
}

export default Search