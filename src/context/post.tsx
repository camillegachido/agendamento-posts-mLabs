import React, {
   createContext,
   ReactNode,
   useCallback,
   useMemo,
   useState,
} from 'react'
import { IPost } from '../common/interfaces'

interface IPostContextType {
   post: IPost
   updatePost: (newPost: IPost) => void
}

const postContext = createContext<IPostContextType>({} as IPostContextType)
function PostProvider({ children }: { children: ReactNode }) {
   const [post, setPost] = useState<IPost>({
      socialMedias: [],
      text: '',
      date: '',
      hour: '',
      img: '',
   })

   const updatePost = useCallback((newPost: IPost) => {
      setPost(newPost)
   }, [])

   const provider = useMemo(
      () => ({
         post,
         updatePost,
      }),
      [post, updatePost],
   )

   return (
      <postContext.Provider value={provider}>{children}</postContext.Provider>
   )
}
export { PostProvider, postContext }
