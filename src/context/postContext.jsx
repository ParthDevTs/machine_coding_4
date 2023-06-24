import { createContext, useContext, useEffect, useState } from "react"
import { forumData } from "../database/data"

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
    const [allForumData, setAllForumData] = useState(forumData);
    const [sortingOrder, setSortingOrder] = useState(1)
    const getPostData = (id) => {
        let posts = allForumData.posts.filter((post) => post.postId === id);
        return posts[0];
    }
    const bookMarkPost = (postId) => {
        let updatedPosts = allForumData.posts.map(post => post.postId === postId ? { ...post, isBookmarked: !post.isBookmarked } : post);
        setAllForumData({ ...allForumData, posts: updatedPosts });
    }

    const voteHandler = (postId, type) => {
        let updatedPosts = {}
        switch (type) {
            case "upvote":
                updatedPosts = allForumData.posts.map(post => post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post);
                setAllForumData({ ...allForumData, posts: updatedPosts });
                break;
            case "downvote":
                updatedPosts = allForumData.posts.map(post => post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post);
                setAllForumData({ ...allForumData, posts: updatedPosts });
                break;
            default:

        }
    }
    const sortAllData = () => {
        let sortedList = []
        switch (sortingOrder) {
            case 1:
                sortedList = allForumData.posts.sort((first, second) => first.upvotes > second.upvotes ? 1 : -1)
                setAllForumData({ ...allForumData, posts: sortedList });

                break
            case 2:
                sortedList = allForumData.posts.sort((first, second) => first.createdAt > second.createdAt ? 1 : -1)
                setAllForumData({ ...allForumData, posts: sortedList });
                break
            default:
                setAllForumData(forumData);
                break;
        }
    };
    useEffect(() => {
        sortAllData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortingOrder])
    return <ForumContext.Provider value={{ voteHandler, setSortingOrder, sortingOrder, sortAllData, getPostData, allForumData, setAllForumData, bookMarkPost }}>
        {children}
    </ForumContext.Provider>
}

export const useForum = () => useContext(ForumContext);