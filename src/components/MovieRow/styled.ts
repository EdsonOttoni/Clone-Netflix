import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
`

export const TitleMovie = styled.h1`
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 30px;
  margin-bottom: 0px;
`

export const MovieRowListarea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`

export const MovieRowList = styled.div`
 transition: all ease 0.5s;
`

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`

export const ImageMovieRowItem = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: all ease 0ws;

  &:hover {
    transform: scale(1);
  }
`

export const LeftArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0; 
  left: 0;

  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`
export const RightArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0; 
  right: 0;

  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`
