import DropDown from "../components/dropDown"
import Post from "../components/post";
import { useForum } from "../context/postContext"

export const Home = () => {
    const { allForumData } = useForum();
    const posts = allForumData.posts
    return <>
        <div className="main__window flex py-12">
            <div className="left__pane relative w-[200px] grid items-start justify-center">
                <div className="page__nav flex flex-col gap-4 ">

                    <p className="flex gap-2  hover:text-indigo-500 font-bold"><span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </span>Home</p>
                    <p className="flex gap-2 hover:text-indigo-500 "><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                    </span>Explore</p>
                    <p className="flex gap-2 hover:text-indigo-500 "><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                    </svg>
                    </span>Bookmarks</p>
                    <p className="flex gap-2 hover:text-indigo-500 "><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
                    </span>Profile</p>
                </div>

                <div className="userInfo bottom-[2rem] translate-x-[-50%] absolute left-[50%] flex gap-1 h-[2rem]">
                    <img src={allForumData.picUrl} alt={allForumData.username} />
                    <div className="user text-xs">
                        <p className="font-bold">{allForumData.name}</p>
                        <p className="text-indigo-700">{`@${allForumData.username}`}</p>
                    </div>
                </div>
            </div>
            <div className="main__pane flex-grow">
                <ul className="post__container flex flex-col gap-[1rem] items-center">
                    {posts.map(post => {
                        return (
                            <Post key={post.postId} main_post={post} />
                        )
                    })}
                </ul>
            </div>
            <div className="right__pane w-[200px] grid items-start justify-center">
                <div className="sorting__container container flex flex-col gap-2">
                    <p className="text-left font-bold">SortBy</p>
                    <div className="dropDownContainer">
                        <DropDown />
                    </div>
                </div>
            </div>
        </div>
    </>
}