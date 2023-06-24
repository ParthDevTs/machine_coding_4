import React from 'react'

function Comments({ usercomment, mainUser }) {
    const { username, picUrl, comment, createdAt } = usercomment
    return (
        <div className="comment__box flex gap-2 ">
            <img className='h-[2rem] w-[2rem]' src={picUrl} alt={username} />
            <div className="main__content flex flex-col gap-1 text-xs flex-grow">
                <header className="comment__header text-sm flex h-[2rem] gap-2">

                    <div className="userInfo flex gap-1 items-center">
                        <p className='text-black font-bold'>{username}</p>
                        <p className='text-xs'>{`@${username}`}</p>
                        <p className='text-xs'>| {createdAt}</p>
                    </div>
                </header>
                <div className="content">
                    <p>Replying to <span className="text-indigo-700 font-bold">{`@${mainUser}`}</span></p>
                    <p>{comment}</p>
                </div>
                <div className="action__buttons border-t flex justify-between py-2">
                    <button className="hover:text-indigo-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                    </button>
                    <button className="hover:text-indigo-300  transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </button>
                    <button className="hover:text-indigo-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comments