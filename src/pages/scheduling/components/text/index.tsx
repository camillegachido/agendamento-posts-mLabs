import React, { useState, useEffect, useContext } from 'react'

import Picker, { IEmojiData } from 'emoji-picker-react'

import { postContext } from '../../../../context/post'

import * as G from '../../../../common/styles'
import * as S from './styles'

export function Text(): JSX.Element {
   const { post, updatePost } = useContext(postContext)

   const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>()
   const [showEmoji, setShowEmoji] = useState(false)

   const onEmojiClick = (
      event: React.MouseEvent<Element, MouseEvent>,
      emojiObject: IEmojiData,
   ) => {
      setChosenEmoji(emojiObject)
   }

   useEffect(() => {
      if (chosenEmoji)
         updatePost({ ...post, text: post.text + chosenEmoji.emoji })
   }, [chosenEmoji])

   return (
      <G.Modal gridArea="text">
         <header>
            <h1>Texto do post</h1>
         </header>
         <S.TextareaContainer>
            <S.Textarea
               placeholder="Aqui vai o texto descritivo desse post"
               value={post.text}
               onChange={({ target }) =>
                  updatePost({ ...post, text: target.value })
               }
            />
            <S.EmojiButton
               type="button"
               aria-label="Teclado de emoji"
               onClick={() => setShowEmoji(!showEmoji)}
            />
            <S.PickerContainer hidden={!showEmoji}>
               <Picker
                  onEmojiClick={onEmojiClick}
                  disableAutoFocus
                  disableSkinTonePicker
                  disableSearchBar
                  groupNames={{ smileys_people: 'PEOPLE' }}
                  native
                  groupVisibility={{
                     flags: false,
                     animals_nature: false,
                     food_drink: false,
                     travel_places: false,
                     activities: false,
                     objects: false,
                     symbols: false,
                     recently_used: false,
                  }}
               />
            </S.PickerContainer>
         </S.TextareaContainer>
      </G.Modal>
   )
}

export default Date
