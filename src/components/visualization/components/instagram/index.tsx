import React, { useContext } from 'react'

import { UserName, Container, Icon, Description } from '../styles'
import { ContainerIcons } from './styles'

import Bookmark from '../../assets/bookmark.png'
import Heart from '../../assets/heart.png'
import Comment from '../../assets/comment.png'
import { postContext } from '../../../../context/post'
import { IShow } from '../../../../common/interfaces'

export function Instagram({ show }: IShow): JSX.Element {
   const { post } = useContext(postContext)

   return (
      <Container hidden={!show} className="item-scroll">
         <header>
            <Icon background="linear-gradient(187.5deg, #EF2EA2 5.81%, #E0A22B 109.34%)">
               <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M8.00179 3.8978C5.73162 3.8978 3.9005 5.72933 3.9005 8C3.9005 10.2707 5.73162 12.1022 8.00179 12.1022C10.2719 12.1022 12.1031 10.2707 12.1031 8C12.1031 5.72933 10.2719 3.8978 8.00179 3.8978ZM8.00179 10.667C6.53475 10.667 5.33542 9.47094 5.33542 8C5.33542 6.52906 6.53118 5.33304 8.00179 5.33304C9.47239 5.33304 10.6682 6.52906 10.6682 8C10.6682 9.47094 9.46882 10.667 8.00179 10.667ZM13.2274 3.73C13.2274 4.26197 12.7991 4.68682 12.2708 4.68682C11.739 4.68682 11.3142 4.2584 11.3142 3.73C11.3142 3.20161 11.7426 2.77318 12.2708 2.77318C12.7991 2.77318 13.2274 3.20161 13.2274 3.73ZM15.9438 4.7011C15.8831 3.41939 15.5904 2.28406 14.6516 1.34866C13.7165 0.413254 12.5814 0.120495 11.2999 0.0562312C9.97925 -0.0187437 6.02075 -0.0187437 4.70006 0.0562312C3.4222 0.116925 2.28712 0.409684 1.34835 1.34509C0.409593 2.28049 0.120468 3.41582 0.0562186 4.69753C-0.0187395 6.01852 -0.0187395 9.97791 0.0562186 11.2989C0.116899 12.5806 0.409593 13.7159 1.34835 14.6513C2.28712 15.5867 3.41863 15.8795 4.70006 15.9438C6.02075 16.0187 9.97925 16.0187 11.2999 15.9438C12.5814 15.8831 13.7165 15.5903 14.6516 14.6513C15.5868 13.7159 15.8795 12.5806 15.9438 11.2989C16.0187 9.97791 16.0187 6.02209 15.9438 4.7011ZM14.2376 12.7163C13.9592 13.416 13.4202 13.9551 12.717 14.2372C11.664 14.6549 9.16542 14.5585 8.00179 14.5585C6.83815 14.5585 4.33597 14.6513 3.28656 14.2372C2.58695 13.9587 2.04796 13.4196 1.76598 12.7163C1.34835 11.6631 1.44473 9.1639 1.44473 8C1.44473 6.8361 1.35192 4.33337 1.76598 3.28372C2.04439 2.58396 2.58338 2.04485 3.28656 1.7628C4.33954 1.34509 6.83815 1.44148 8.00179 1.44148C9.16542 1.44148 11.6676 1.34866 12.717 1.7628C13.4166 2.04128 13.9556 2.58039 14.2376 3.28372C14.6552 4.33694 14.5588 6.8361 14.5588 8C14.5588 9.1639 14.6552 11.6666 14.2376 12.7163Z" />
               </svg>
            </Icon>
            <div className="info">
               <UserName>Anselmo</UserName>
            </div>
         </header>
         <main>
            <img src={post.img} alt="imagem" className="principal" />
            <ContainerIcons className="center">
               <div>
                  <img src={Heart} alt="ícone de favoritar" />
                  <img src={Comment} alt="ícone de comentario" />
               </div>
               <img src={Bookmark} alt="ícone de bookmark" />
            </ContainerIcons>
            <Description className="center">
               {post.text !== '' ? post.text : 'Exemplo de texto'}
            </Description>
         </main>
      </Container>
   )
}
