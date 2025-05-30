import React from 'react'
import notificationapplication from "../../../../assets/img/Notificationapplication.png"

const Applicationsentdetails = () => {
  return (
    <>
  <div className="max-w-5xl mx-auto w-full" >

    <div className='flex items-start mx- border bg-white hover:bg-pink-100 rounded-2xl mt-[26px] shadow-lg p-4 gap-1 hover:shadow-2xl	 hover:rounded-l  cursor-pointer focus:bg-blue-700 ' >  
    <div className=' h-full w-14   flex items-center justify-center'>
      <img src={notificationapplication} className='h-full w-full object-contain' alt='notification-application-pic' />
    </div>

    <div className='px-4  flex flex-col text-wrap flex-wrap '  >
        <h1 className='text-[#191F33] font-inter font-medium text-[20px]/[32px] '>Application sent</h1>
        <p className=' text-[#636A80]  font-inter font-normal text-lg' >Applications for <span className='text-blue-600' >Google inc</span>  have entered for company review
        </p>
        <div className='flex items-center gap-36 mt-2 ' >
        <h4 className='text-[#636A80]  font-inter font-normal  w-52 ' >1 Hour ago</h4>
        <button className='text-black  hover:bg-blue-500 hover:text-black hover:text-l hover:rounded-xl  p-2 m-0' >Application details</button>
        </div>
    </div>
    <div>
     
    </div>
  </div>
  </div>
  </>
  )
}

export default Applicationsentdetails