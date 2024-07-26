import React from 'react'
import BatchTable from '../components/BatchTable'
import ChaiAurCodeHeading from '../components/ChaiAurCodeHeading'

const Batches = () => {

    const handleSubmit = () => {

    }
  return (
    <div className='relative w-screen h-screen bg-pink-400 flex flex-col font-inter overflow-x-hidden '>
        <ChaiAurCodeHeading color='#444B79'/>

        <div className='w-full max-w-[1246px] mx-auto min-h-[700px] h-full my-[30px] ml-24 bg-white-100 rounded-[18px] flex flex-col items-start justify-start'>
            <div className='mt-[30px] ml-24 text-grey-100 text-[40px] font-sans font-bold leading-[52.08px] text-center'>
                Batches
            </div>
            <div className='ml-24 text-grey-100 text-[20px] font-sans text-center leading-[32.55px] mb-4'>
                Create learner’s batch and share information at the same time.
            </div>
            <form onSubmit={handleSubmit} className='flex my-3 gap-2 h-[43px] ml-24'>
                <input 
                    id="name" name="name" required
                    placeholder='Search by Title'
                    className='flex w-[332px] rounded-[4px] border-[1px] border-grey-200 px-4 text-[16px]'
                    type='text'

                />
                <button type='submit' className='w-[116px] bg-blue-600 text-[18px] text-white rounded-[4px]'>Search</button>
            </form>
            <BatchTable/>
            
        </div>
        
        
    </div>
  )
}

export default Batches