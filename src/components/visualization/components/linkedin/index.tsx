import React, { useContext } from 'react'

import { UserName, Container, Icon, Description } from '../styles'
import {
   ContainerIcons,
   Date,
   ContainerInfo,
   CommentsContainer,
} from './styles'

import Like from '../../assets/like.png'
import Share from '../../assets/share.png'
import Comment from '../../assets/comment-link.png'
import { postContext } from '../../../../context/post'
import { IShow } from '../../../../common/interfaces'

export function Linkedin({ show }: IShow): JSX.Element {
   const { post } = useContext(postContext)

   return (
      <Container hidden={!show} className="item-scroll">
         <header>
            <Icon background="#2E92EF">
               <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M3.58143 15.3996H0.264286V5.11809H3.58143V15.3996ZM1.92107 3.71559C0.860357 3.71559 0 2.86997 0 1.84903C7.59214e-09 1.35864 0.202398 0.888329 0.562669 0.541568C0.92294 0.194808 1.41157 0 1.92107 0C2.43057 0 2.9192 0.194808 3.27947 0.541568C3.63974 0.888329 3.84214 1.35864 3.84214 1.84903C3.84214 2.86997 2.98143 3.71559 1.92107 3.71559ZM15.9964 15.3996H12.6864V10.3946C12.6864 9.20184 12.6614 7.67215 10.9618 7.67215C9.23714 7.67215 8.97286 8.96809 8.97286 10.3087V15.3996H5.65929V5.11809H8.84071V6.52059H8.88714C9.33 5.71278 10.4118 4.86028 12.0257 4.86028C15.3829 4.86028 16 6.98809 16 9.75184V15.3996H15.9964Z" />
               </svg>
            </Icon>
            <ContainerInfo className="info">
               <UserName>Anselmo</UserName>
               <Date>{post.date !== '' ? post.date : '6 de Janeiro'}</Date>
            </ContainerInfo>
         </header>
         <main>
            <Description className="center mt-0">
               {post.text !== '' ? post.text : 'Exemplo de texto'}
            </Description>
            <img src={post.img} alt="imagem" className="principal" />
            <CommentsContainer className="center">
               <p>5 comentários</p>
            </CommentsContainer>
            <ContainerIcons className="center">
               <img src={Like} alt="ícone de favoritar" />
               <img src={Comment} alt="ícone de comentário" />
               <img src={Share} alt="ícone de compartilhar" />
            </ContainerIcons>
         </main>
      </Container>
   )
}
