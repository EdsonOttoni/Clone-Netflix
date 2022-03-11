import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding-right: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  transition: all ease 0.3s;
`

export const NetflixTitleWrapper = styled(Link)`
  color: #e50914;
`

export const NetflixTitle = styled.h1`
  font-size: 30px;
`

export const IconUserPerfil = styled.span`
  height: 50px;

  img {
    height: 100%;
    border-radius: 3px;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const ContainerList = styled.div`
  margin-top: -150px;
`

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footnote = styled.div``
