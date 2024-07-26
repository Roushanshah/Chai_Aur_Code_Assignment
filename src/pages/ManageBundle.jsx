import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import React, { useEffect, useState } from 'react';
import BundleComponent from '../components/BundleComponent';
import ChaiAurCodeHeading from '../components/ChaiAurCodeHeading';
import { course } from '../data';


const ManageBundle = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      course.map((item, index) => ({...item, id: `item-${index+1}`}))
    )
  },[])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  const handleMoveToTop = (id) => {
    setItems((items) => {
      const index = items.findIndex((item) => item.id === id);
      if (index > 0) {
        return arrayMove(items, index, 0);
      }
      return items;
    });
  };

  const handleMoveToBottom = (id) => {
    setItems((items) => {
      const index = items.findIndex((item) => item.id === id);
      if (index !== items.length - 1) {
        return arrayMove(items, index, items.length - 1);
      }
      return items;
    });
  };

  return (
    <div className='relative w-screen h-screen bg-bg-green flex flex-col font-inter overflow-x-hidden '>
        <ChaiAurCodeHeading color='#4F6F52'/>

        <div className='w-full max-w-[1223px] mx-auto min-h-[700px] h-full my-[30px] ml-24 bg-white-100 rounded-[18px] flex flex-col items-start justify-start'>
            <div className='mt-[30px] ml-24 text-black-500 text-[40px] font-sans font-bold leading-[52.08px] text-center'>
                Manage Bundle
            </div>
            <div className='ml-24 text-grey-100 text-[20px] font-sans text-center leading-[32.55px] mb-4'>
                Change orders of the products based on priority
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              
            >
              <SortableContext
                
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {
                  items.map((item) => (<BundleComponent 
                    {...item} 
                    key={item.id}
                    handleClick={handleRemove}
                    handleMoveToTop={handleMoveToTop}
                    handleMoveToBottom={handleMoveToBottom}
                  />))
                }
              </SortableContext>
            </DndContext>
        </div>
        
        
    </div>

    
  )
}

export default ManageBundle