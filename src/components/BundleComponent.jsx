import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const BundleComponent = ({id, title, imageUrl, currency, price, type, handleClick, handleMoveToTop, handleMoveToBottom}) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id});

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

  return (
    <div   ref={setNodeRef} style={style} className={`relative w-full max-w-[950px] h-[83px] bg-white-200 text-black-500 border-white-400 rounded-[8px] shadow-custom px-6 my-2 ml-24 flex items-center justify-between`}
    >   
        <div className='flex justify-center items-center gap-6'>
            <div className='rounded-[8px]' {...attributes} {...listeners}>
                <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33329 24C7.33329 25.8333 5.83329 27.3333 3.99996 27.3333C2.16663 27.3333 0.666626 25.8333 0.666626 24C0.666626 22.1666 2.16663 20.6666 3.99996 20.6666C5.83329 20.6666 7.33329 22.1666 7.33329 24ZM3.99996 10.6666C2.16663 10.6666 0.666626 12.1666 0.666626 14C0.666626 15.8333 2.16663 17.3333 3.99996 17.3333C5.83329 17.3333 7.33329 15.8333 7.33329 14C7.33329 12.1666 5.83329 10.6666 3.99996 10.6666ZM3.99996 0.666626C2.16663 0.666626 0.666626 2.16663 0.666626 3.99996C0.666626 5.83329 2.16663 7.33329 3.99996 7.33329C5.83329 7.33329 7.33329 5.83329 7.33329 3.99996C7.33329 2.16663 5.83329 0.666626 3.99996 0.666626ZM14 7.33329C15.8333 7.33329 17.3333 5.83329 17.3333 3.99996C17.3333 2.16663 15.8333 0.666626 14 0.666626C12.1666 0.666626 10.6666 2.16663 10.6666 3.99996C10.6666 5.83329 12.1666 7.33329 14 7.33329ZM14 10.6666C12.1666 10.6666 10.6666 12.1666 10.6666 14C10.6666 15.8333 12.1666 17.3333 14 17.3333C15.8333 17.3333 17.3333 15.8333 17.3333 14C17.3333 12.1666 15.8333 10.6666 14 10.6666ZM14 20.6666C12.1666 20.6666 10.6666 22.1666 10.6666 24C10.6666 25.8333 12.1666 27.3333 14 27.3333C15.8333 27.3333 17.3333 25.8333 17.3333 24C17.3333 22.1666 15.8333 20.6666 14 20.6666Z" fill="#7F7F7F"/>
            </svg>
            </div>
            <div>
                <img src={imageUrl} alt={title} width={133} height={75}/>
            </div>
            <div>
                {title}
            </div>
        </div>

        <div  className='z-0 flex justify-items-stretch items-center gap-6'>
            <div className='flex gap-1'>
                <span>{currency}</span>
                <span>{price}/-</span>
            </div>
            <div className=' w-[74px] h-[26px] border-[0.1px] border-black-50 bg-green-50 rounded-[4px] font-sans text-[14px] text-black-500 leading-[16.94px] flex items-center justify-center'>
                {type}
            </div>
            <div  className='cursor-pointer ' onClick={() => setIsOpen(prev => !prev)}>
                <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.84375 18.3125C4.84375 18.9341 4.59682 19.5302 4.15728 19.9698C3.71774 20.4093 3.1216 20.6562 2.5 20.6562C1.8784 20.6562 1.28226 20.4093 0.842718 19.9698C0.40318 19.5302 0.15625 18.9341 0.15625 18.3125C0.15625 17.6909 0.40318 17.0948 0.842718 16.6552C1.28226 16.2157 1.8784 15.9688 2.5 15.9688C3.1216 15.9688 3.71774 16.2157 4.15728 16.6552C4.59682 17.0948 4.84375 17.6909 4.84375 18.3125ZM4.84375 10.5C4.84375 11.1216 4.59682 11.7177 4.15728 12.1573C3.71774 12.5968 3.1216 12.8438 2.5 12.8438C1.8784 12.8438 1.28226 12.5968 0.842718 12.1573C0.40318 11.7177 0.15625 11.1216 0.15625 10.5C0.15625 9.8784 0.40318 9.28226 0.842718 8.84272C1.28226 8.40318 1.8784 8.15625 2.5 8.15625C3.1216 8.15625 3.71774 8.40318 4.15728 8.84272C4.59682 9.28226 4.84375 9.8784 4.84375 10.5ZM4.84375 2.6875C4.84375 3.3091 4.59682 3.90524 4.15728 4.34478C3.71774 4.78432 3.1216 5.03125 2.5 5.03125C1.8784 5.03125 1.28226 4.78432 0.842718 4.34478C0.40318 3.90524 0.15625 3.3091 0.15625 2.6875C0.15625 2.0659 0.40318 1.46976 0.842718 1.03022C1.28226 0.59068 1.8784 0.34375 2.5 0.34375C3.1216 0.34375 3.71774 0.59068 4.15728 1.03022C4.59682 1.46976 4.84375 2.0659 4.84375 2.6875Z" fill="black"/>
                </svg>
            </div>
        </div>

        {
            isOpen && (
                <ul ref={containerRef} className='absolute top-14  -right-36 z-20 w-[169px] h-[127px] bg-white-200 shadow-custom rounded-[8px] flex flex-col items-start  justify-center gap-2 px-3 transition-all duration-150 ease-in-out'>
                    <li onClick={() =>{
                        handleMoveToTop(id)
                        setIsOpen(prev => !prev)
                    }} 
                    className='flex justify-center items-center gap-1 cursor-pointer'>
                        <FaArrowUp/>
                        <p className='text-[16px]'>Move To Top</p>
                    </li>

                    <li onClick={() => {
                        handleMoveToBottom(id)
                        setIsOpen(prev => !prev)
                    }} 
                    className='flex justify-center items-center gap-1 cursor-pointer'>
                        <FaArrowDown/>
                        <p className='text-[16px]'>Move To Bottom</p>
                    </li>

                    <li onClick={() => handleClick(id)} className='flex justify-center items-center gap-1 cursor-pointer text-red-500'>
                        <RiDeleteBin6Line/>
                        <p className='  text-[16px]'>Remove</p>
                    </li>
                </ul>
            )
        }
    </div>
  )
}

export default BundleComponent