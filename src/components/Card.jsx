import React from 'react'
import Modal from './Modal'
const Card = ({item}) => {
  return (
    !item.known_for &&
    <div className='flex flex-col items-center hover:scale-[1.01] transition-all duration-200 bg-slate-700
    shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
     p-2 rounded-xl mt-6' onClick={()=>{return(<Modal item={item}/>)}}>
        <div className='flex w-full justify-between px-2 font-mono'>
          <p className='uppercase'>{item.media_type}</p>
          <p>
            {item.release_date ? item.release_date : item.first_air_date} 
          </p>
        </div>
        <div className='min-h-[275px] my-2'>
          {item.poster_path ? 
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='rounded-2xl w-[300px]' loading='lazy' alt='movie poster'/>
          : <img src="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg" className='rounded-2xl w-[300px]' alt="" />
          }
        </div>
        <div className='font-semibold text-xl mb-2 text-center'>
            {
              item.original_title ? item.original_title : item.name
            }
        </div>
        <div>
            {item.overview.substring(0,100)}...
        </div>
            

        
    </div>
    
  )
}

export default Card