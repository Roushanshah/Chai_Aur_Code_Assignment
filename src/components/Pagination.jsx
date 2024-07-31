import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({rowsPerPage, setRowsPerPage, currentPage, setCurrentPage, totalRows}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  return (
    <div className='w-full absolute bottom-12 right-12 flex items-center justify-end gap-4'>
        <div className='flex items-center justify-center gap-4'>
        <span className='text-[16px] text-[#4B4747] leading-[19.36px]'>Rows per page</span>
            <select value={rowsPerPage} onChange={(e) => setRowsPerPage(e.target.value)} className='w-[73px] h-[40px] border-[1px] border-grey-200 rounded-[4px] flex px-3'>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
        </div>
        <div className='flex gap-2'>
            <button 
            onClick={() => setCurrentPage((prev) => Math.max(prev-1, 1))}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? 'text-[#D6D6D6]' : 'text-[#000000]'}`}
            >
              <FaChevronLeft size={35} height={35}/>
            </button>
            <button
            onClick={() => setCurrentPage((prev) => Math.max(prev+1,1))}
            disabled={currentPage === totalPages}
            className={`${currentPage === totalPages ? 'text-[#D6D6D6]' : 'text-[#000000]'}`}
            >
              <FaChevronRight size={35} height={35}/>
            </button>
        </div>
    </div>
  )
}

export default Pagination