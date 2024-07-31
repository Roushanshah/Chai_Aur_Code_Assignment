import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ChaiAurCodeHeading from '../components/ChaiAurCodeHeading';
import Pagination from '../components/Pagination';
import { batches } from '../data';


const Batches = () => {

    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(batches);

    const totalRows = filteredData.length;

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = batches.filter((batch) =>
        batch.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setFilteredData(batches);
        setCurrentPage(1);
    }

    const startIndex = (currentPage-1)*rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex+rowsPerPage);
  return (
    <div className='w-screen overflow-x-auto h-screen bg-pink-400 flex flex-col font-inter '>
        <ChaiAurCodeHeading color='#444B79'/>

        <div className='relative w-full max-w-[1246px] mx-auto h-auto my-[30px] ml-24 bg-white-100 rounded-[18px] flex flex-col items-start justify-start'>

            <div className='mt-[30px] ml-24 text-grey-100 text-[40px] font-sans font-bold leading-[52.08px] text-center'>
                Batches
            </div>

            <div className='ml-24 text-grey-100 text-[20px] font-sans text-center leading-[32.55px] mb-4'>
                Create learner’s batch and share information at the same time.
            </div>

            <form onSubmit={handleSubmit} className='relative flex my-3 gap-2 h-[43px] ml-24'>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="name" name="name" required
                    placeholder='Search by Title'
                    className='flex w-[332px] rounded-[4px] border-[1px] border-grey-200 px-4 text-[16px]'
                    type='text'
                />
                {searchTerm && (
                    <button
                    type='button'
                    onClick={handleClearSearch}
                    className='absolute left-[66%] top-1/2 transform -translate-y-1/2 text-gray-500'
                    >
                        <IoMdClose width={4}/>
                    </button>
                )}
                <button type='submit' className='w-[116px] bg-blue-600 text-[18px] text-white rounded-[4px]'>Search</button>
            </form>

            <div className='w-full max-w-[1126px] mx-auto ml-24 rounded-[8px] border border-[#7D7D7D] mb-28'>
                <table className='w-full border-collapse '>
                    <thead>
                        <tr className=" h-[62px] bg-[#F2F2F2] text-[14px]">
                        <th className='text-left border p-2 w-[34%]'>Title</th>
                        <th className='text-left border p-2 w-[12%]'>Start Date</th>
                        <th className='text-left border p-2  w-[12%]'>End Date</th>
                        <th className='text-left border p-2  w-[12%]'>Price</th>
                        <th className='text-left border p-2  w-[12%]'>Validity/Expiry</th>
                        <th className='text-left border p-2 w-[12%]'>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.map((item, index) => (
                        <tr key={index} className="text-[14px] bg-white ">
                            <td className='p-2 flex gap-2 items-center'>
                                <img src={item.imageUrl} alt='thumbnail' width={106} height={60}/>
                                <p>{item.title}</p>
                            </td>
                            <td className='p-2 border-l '>{item.startDate}</td>
                            <td className='p-2 border-l'>{item.endDate}</td>
                            <td className='p-2 border-l font-bold'>{item.price}</td>
                            <td className='p-2 border-l'>{item.validity}</td>
                            <td className={`p-2 border-l `}>
                                <div className={`mx-auto rounded-[4px] flex justify-center items-center ${item.status === 'Published' ? 'w-[82px] h-[27px] border-[#4ED04B] bg-[#DEFFDE]' : 'w-[101px] h-[27px] border-[#A4A4A4] bg-[#F3F3F3]'}`}>{item.status}</div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalRows={totalRows}
            />
            
        </div>
        
        
    </div>
  )
}

export default Batches