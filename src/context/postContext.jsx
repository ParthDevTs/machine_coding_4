import { createContext, useContext, useState } from "react"
import forumData from "../database/data"

const ForumContext = createContext({ forumData: forumData });




export const ForumProvider = ({ children }) => {
    const [forumData, setForumData] = useState();

    return <ForumContext.Provider value={{ forumData, setForumData }}>
        {children}
    </ForumContext.Provider>
}

export const useForum = useContext(ForumContext);