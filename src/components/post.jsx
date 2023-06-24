import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForum } from '../context/postContext';

function Post({ main_post }) {
    const navigate = useNavigate();
    const { bookMarkPost, voteHandler } = useForum();
    const { postId, username, picUrl, post, postDescription, upvotes, tags, isBookmarked } = main_post;
    return (
        <li className="flex w-[600px] gap-8 bg-white p-4">
            <div className="upvoteSide w-[20px]">
                <button onClick={() => voteHandler(postId, "upvote")} className="up__button text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
                    </svg>

                </button>
                <p>{upvotes}</p>
                <button onClick={() => voteHandler(postId, "downvote")} className="downvote text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd" />
                    </svg>

                </button>
            </div>
            <div className="mainPost text-left flex-grow flex flex-col gap-3 ">
                <header className="post__header h-[2rem] flex text-xs items-center gap-2">
                    <img className='h-[2rem]' src={picUrl} alt={username} />
                    <div className="">Posted by <span className="text-indigo-700 font-bold cursor-pointer">{`@${username}`}</span></div>
                </header>
                <div className="post__content flex flex-col gap-1">
                    <h3 className="post__title font-black text-md">{post}</h3>
                    <div className="tags flex gap-2">
                        {tags.map(tag =>
                            <p className="text-xs font-thin bg-indigo-200 text-indigo-900 px-1 rounded">{tag}</p>
                        )}
                    </div>
                    <p className="text-xs font-semibold ">{postDescription}</p>
                </div>
                <div className="action__buttons border-t flex justify-between py-2">
                    <button onClick={() => navigate(`/post/${postId}`)} className="hover:text-indigo-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                    </button>
                    <button className="hover:text-indigo-300  transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </button>
                    <button onClick={() => bookMarkPost(postId)} style={{ color: isBookmarked ? "red" : "" }} className="hover:text-indigo-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Post