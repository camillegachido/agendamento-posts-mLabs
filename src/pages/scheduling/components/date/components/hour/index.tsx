import React, { useContext } from 'react'
import { postContext } from '../../../../../../context/post'
import Clock from '../../assets/clock.svg'

export function InitialHour() {
   const { post, updatePost } = useContext(postContext)

   return (
      <input
         type="time"
         placeholder="HH:MM"
         value={post.hour}
         style={{ backgroundImage: `url(${Clock})` }}
         className="input-class"
         onChange={({ target }) => updatePost({ ...post, hour: target.value })}
      />
   )
}

export default InitialHour
