import React, { useState, ChangeEvent } from 'react'

import { Drop } from './components'
import * as G from '../../styles'

export function Upload(): JSX.Element {
   const [file, setFile] = useState<File>()

   const handleDrop = (files: FileList) => {
      setFile(files[files.length - 1])
   }

   const handleFileInput = (inputFile: ChangeEvent<HTMLInputElement>) => {
      if (inputFile.target.files) {
         const receivedFile = inputFile.target.files[0] as File
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
