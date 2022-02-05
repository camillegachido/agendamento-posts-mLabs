import styled from 'styled-components'

import emoji from './assets/emoji.png'

export const TextareaContainer = styled.main`
   position: relative;
`
export const Textarea = styled.textarea`
   width: calc(100% - 44px);
   height: 146px;
   resize: none;
   border: 1px solid #949494;
   color: #828282;
   padding: 12px 18px;
   border-radius: 4px;

   font-weight: 500;
   font-size: 14px;
   line-height: 21px;

   color: #4f4f4f;
`

export const EmojiButton = styled.button`
   border: none;
   width: 34px;
   height: 20px;
   background: url(${emoji}) no-repeat center;
   position: absolute;
   top: 18px;
   right: 25px;
   padding: 0;

   &:hover {
      cursor: pointer;
   }
`

export const PickerContainer = styled.div`
   position: absolute;
   top: 38px;
   right: 25px;

   .emoji-picker-react .emoji-group {
      overflow-x: hidden;
   }

   .emoji-categories {
      display: none;
   }
`
