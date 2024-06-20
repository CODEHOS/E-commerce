import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter w-full h-40vh flex flex-col justify-center items-center mx-auto px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] via-[#fde1ff] to-[#c9e4ff] gap-[30px]'>
        <h1 className='text-[55px] font-semibold text-[#454545]'>Get EXclusive offers in your email</h1>
        <p className='text-[#454545] text-[20px]'>Subscribe to our news letter and stay updated</p>
        <div className='flex items-center justify-center bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]'>
            <input type="email" placeholder='your email id' className='w-[500px] ml-[30px] border-none outline-none text-[20px] text-[#616161] font-poppins' />
            <button className='w-[210px] h-[70px] bg-black text-white text-[20px] rounded-full cursor-pointer'>Subscribe</button>

        </div>
    </div>
  )
}

export default NewsLetter
