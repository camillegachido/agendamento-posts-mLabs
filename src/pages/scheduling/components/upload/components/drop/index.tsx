import React, { ChangeEvent } from 'react'

import FileInput from '../fileInput'

import Cloud from './assets/cloud.png'

import * as G from '../../../../../../common/styles'
import * as S from './styles'

interface PropsDrop {
   handleDrop: (files: FileList) => void
   handleFileInput: (inputFile: ChangeEvent<HTMLInputElement>) => void
   file: File | undefined
}

export function Drop({
   handleFileInput,
   handleDrop,
   file,
}: PropsDrop): JSX.Element {
   return (
      <S.DropContainer>
         <img src={Cloud} alt="ícone de upload" />
         <FileInput handleDrop={handleDrop}>
            <p>
               {file
                  ? file.name
                  : 'Arraste e solte uma imagem aqui ou clique no botão abaixo'}
            </p>
         </FileInput>
         <S.ButtonFile>
            <G.Button
               borderColor="#2F80ED"
               backgroundColor="#fff"
               color="#2F80ED"
            >
               Pesquisar imagens
            </G.Button>
            <input
               type="file"
               aria-labelledby="img-button"
               accept="image/*"
               className="hide-file"
               onChange={handleFileInput}
            />
         </S.ButtonFile>
      </S.DropContainer>
   )
}
