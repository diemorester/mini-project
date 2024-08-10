import React from 'react'

export default function SearchBar() {
    return (
        <div className="w-full bg-sept-black block">
            <div className='max-w-[1400px] mx-auto'>
                <form className='relative'>
                    <div className='relative z-10'>
                        <input type='search' placeholder='[ search everything here . . . ]' className='w-full h-[69px] sm:h-[150px] bg-sept-green
                        text-lg sm:text-5xl text-center px-6 text-sept-white border-0' />
                    </div>
                </form>
            </div>
            {/* <form className='flex'>
                <input type='search' placeholder='[ search everything here . . .' className='w-[90%] h-[69px] sm:h-[150px] bg-sept-green
                        text-lg sm:text-5xl text-center px-6 text-sept-white absolute left-3' />
            </form> */}
        </div>
    )
}