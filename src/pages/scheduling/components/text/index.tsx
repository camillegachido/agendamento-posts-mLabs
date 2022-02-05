import React, { useState, useEffect } from 'react'

import Picker, { IEmojiData } from 'emoji-picker-react'

import * as G from '../../styles'
import * as S from './styles'

export function Text(): JSX.Element {
   const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>()
   const [text, setText] = useState('')
   const [showEmoji, setShowEmoji] = useState(false)

   const onEmojiClick = (
      event: React.MouseEvent<Element, MouseEvent>,
      emojiObject: IEmojiData,
   ) => {
      setChosenEmoji(emojiObject)
   }

   useEffect(() => {
      if (chosenEmoji) setText(text + chosenEmoji.emoji)
   }, [chosenEmoji])

   return (
      <G.Modal gridArea="text">
         <header>
            <h1>Texto do post</h1>
         </header>
         <S.TextareaContainer>
            <S.Textarea
               placeholder="Aqui vai o texto descritivo desse post"
               value={text}
               onChange={({ target }) => setText(target.value)}
            />
            <S.EmojiButton
               type="button"
               aria-label="Teclado de emoji"
               onClick={() => setShowEmoji(!showEmoji)}
            />
            <S.PickerContainer hidden={showEmoji}>
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
