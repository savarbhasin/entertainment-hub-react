import React, { useContext,useEffect } from 'react'
import AppContext from '../context/AppContext'
const api_key = '72f882f93d04364c2151768541b804ac'
const Modal = (item) => {
    const {posts,fetchData} = useContext(AppContext)
    useEffect(() =>{
        fetchData(1,`https://api.themoviedb.org/3/${item.media_type}/${item.id}?api_key=${api_key}&language=en-US`)  
    },[])
  return (
    <div>
        {
            posts &&
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                </div>
                <div>
                    <p>{item.original_title} ? {item.original_title} : {item.name}</p>
                    <p>{item.overview}</p>
                    <button 
                    href={`https://api.themoviedb.org/3/${item.media_type}/${item.id}/videos?api_key=${api_key}&language=en-US`}>
                        Watch Trailer
                    </button>
                </div>
            </div>
        }
    </div>
  )
}

export default Modal