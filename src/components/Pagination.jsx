import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
const Pagination = () => {
    const {page,totalPages,handlePageChange} = useContext(AppContext)
  return (
    <div className='flex w-full mt-10 justify-center gap-20 items-center'>
    {/* {
        totalPages!==0 &&
        <div className='flex font-mono text-black items-center justify-center gap-5'>
        {
            page>1 &&
            <button className='text-[20px] bg-[#f0f8ff] px-2 rounded-lg border-2 border-slate-400 lowercase' onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        {
            page<totalPages &&
            <button className='text-[20px] bg-[#f0f8ff] px-2 rounded-lg border-2 border-slate-400 lowercase' onClick={()=>handlePageChange(page+1)}>Next</button>
        }
        </div>
        
    } */}
    {totalPages !== 0 && (
    <div className="flex font-mono text-black items-center justify-center gap-5">
        {page > 1 && (
            <button
            className="text-[20px] bg-[#f0f8ff] px-2 rounded-lg border-2 border-slate-400 lowercase"
            onClick={() => handlePageChange(page - 1)}
            >
            Previous
            </button>
        )}
        {page < totalPages && (
            <button
            className="text-[20px] bg-[#f0f8ff] px-2 rounded-lg border-2 border-slate-400 lowercase"
            onClick={() => handlePageChange(page + 1)}
            >
            Next
            </button>
        )}
        <div className='text-[20px] text-white'>
            <p>Page {page} of {totalPages}</p>
        </div>
    </div>
    )}
    </div>
  )
}

export default Pagination