import React from 'react';
import image1 from '../assets/image1.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
const data = [
    {
      title: 'Interview Preparation With Javascript 2.0',
      imageUrl: image1,
      startDate: '20 July 2024',
      endDate: '20 July 2024',
      price: '$500',
      validity: '6 months',
      status: 'Published'
    },
    {
      title: '30 Days Of Javascript Challenge',
      imageUrl: image6,
      startDate: '13 Jul 2024',
      endDate: '12 Aug 2024',
      price: '$600',
      validity: '6 months',
      status: 'Unpublished'
    },
    {
        title: 'SQL Basics To Advanced Mastery Course',
        imageUrl: image7,
        startDate: '2 Aug 2024',
        endDate: '15 Sep 2024',
        price: '$600',
        validity: '6 months',
        status: 'Unpublished'
    },
  ];
  

const BatchTable = () => {
  return (
    <div className='w-full max-w-[1126px] mx-auto ml-24 overflow-hidden rounded-[8px] border border-[#7D7D7D]'>
        <table className='w-full border-collapse'>
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
                {data.map((item, index) => (
                <tr key={index} className="h-[62px] text-[14px] bg-white">
                    <td className='p-2 flex gap-2 items-center'>
                        <img src={item.imageUrl} alt='thumbnail' width={106} height={60}/>
                        <p>{item.title}</p>
                    </td>
                    <td className='p-2 border-l '>{item.startDate}</td>
                    <td className='p-2 border-l'>{item.endDate}</td>
                    <td className='p-2 border-l'>{item.price}</td>
                    <td className='p-2 border-l'>{item.validity}</td>
                    <td className={`p-2 border-l `}>
                        <div className={`mx-auto rounded-[4px] flex justify-center items-center ${item.status === 'Published' ? 'w-[82px] h-[27px] border-[#4ED04B] bg-[#DEFFDE]' : 'w-[101px] h-[27px] border-[#A4A4A4] bg-[#F3F3F3]'}`}>{item.status}</div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  )
}

export default BatchTable