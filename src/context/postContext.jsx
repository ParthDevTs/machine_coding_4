import { createContext, useContext, useState } from "react"
import { forumData } from "../database/data"

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
    const [allForumData, setAllForumData] = useState(forumData);
    const getPostData = (id) => {
        let posts = allForumData.posts.filter((post) => post.postId === id);
        return posts[0];
    }
    const bookMarkPost = (postId) => {
        let updatedPosts = allForumData.posts.map(post => post.postId === postId ? { ...post, isBookmarked: !post.isBookmarked } : post);
        setAllForumData({ ...allForumData, posts: updatedPosts });
    }
    return <ForumContext.Provider value={{ getPostData, allForumData, setAllForumData, bookMarkPost }}>
        {children}
    </ForumContext.Provider>
}

export const useForum = () => useContext(ForumContext);