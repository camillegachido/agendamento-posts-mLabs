import React, { useState, ChangeEvent, useContext } from 'react'

import { Drop } from './components'
import * as G from '../../../../common/styles'
import { postContext } from '../../../../context/post'

export function Upload(): JSX.Element {
   const { post, updatePost } = useContext(postContext)

   const [file, setFile] = useState<File>()

   const handleDrop = (files: FileList) => {
      setFile(files[files.length - 1])
   }

   const handleFileInput = (inputFile: ChangeEvent<HTMLInputElement>) => {
      if (inputFile.target.files && inputFile.target.files[0]) {
         const reader = new FileReader()
         reader.onload = function (e) {
            updatePost({ ...post, img: e.target?.result?.toString() ?? '' })
         }
         const receivedFile = inputFile.target.files[0] as File
         reader.readAsDataURL(receivedFile)
         setFile(receivedFile)
      }
   }

   return (
      <G.Modal gridArea="upload">
         <header>
            <h1>Upload de imagem</h1>
         </header>
         <main>
            <Drop
               handleDrop={handleDrop}
               handleFileInput={handleFileInput}
               file={file}
            />
         </main>
      </G.Modal>
   )
}

export default Upload
