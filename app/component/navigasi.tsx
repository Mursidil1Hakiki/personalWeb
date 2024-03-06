import React from 'react'

type Props = {}

const Navigasi = (props: Props) => {
  return (
    <>
        <div className=" flex  justify-center p-4 w-full bg-blue-700 font-bold sm:justify-between ">
            <div className="bg-white  flex justify-center items-center p-2 rounded-full">logo</div>
            <div className='p-2 sm:hidden text-white text-sm'>REKAYASA PERANGAKAT LUNAK DAN GAME</div>
            <div className='hidden sm:flex sm:flex-row justify-between items-center w-[400px] text-white '> 
              <a href="" >Home</a>
              <a href="">Berita</a>
              <a href="">Produk</a>
              <a href="">Komentar</a>
              <a href="">Tertang Kami</a>
            </div>
            <div className="hidden text-white md:flex  justify-between items-center ">
              <label htmlFor="search" className='mr-2'>Search</label>
              <input type="text" name="" id="search" className='h-6 rounded-full' />
            </div>
        </div>
    </>
  )
}

export default Navigasi