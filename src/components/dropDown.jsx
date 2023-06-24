import React, { useState } from 'react'


function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex flex-col items-center ">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-blue-400 text-[1rem] p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider b-4 border-black active:border-white duration-300 active:text-white">
                DropDown
                {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                ) :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>

                    )}
            </button>

            {isOpen && (
                <div className="options__list text-[0.8rem]  absolute bg-blue-400 top-12 flex flex-col items-start rounded-lg p-2 w-full ">
                    <div className="flex w-full  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 font-bold p-4"><p>Latest Posts</p></div>
                    <div className="flex w-full hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 font-bold p-4"><p>Most Upvoted</p></div>
                </div>
            )}
        </div>
    )
}

export default DropDown