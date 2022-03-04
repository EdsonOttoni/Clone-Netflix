import { useState } from "react";
import { MovieSection } from "../../api/tmdb";

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

import {
  Container,
  MovieRowItem,
  MovieRowListarea,
  MovieRowList,
  TitleMovie,
  ImageMovieRowItem,
  LeftArrow,
  RightArrow
} from './styled'
import { BsArrowRight } from "react-icons/bs";

interface MovieRowProps {
  title: string
  items: MovieSection['items']
}

const MovieRow = ({ title, items }: MovieRowProps) => {

  const [horizontalScrollState, setHorizontalScrollState] = useState(-400)

  const handleRightArrow = () => {
    let x = horizontalScrollState - Math.round(window.innerWidth / 2)
    let width = items.results.length * 150
    if ((window.innerWidth - width) > x) {
      x = (window.innerWidth - width) - 60
    }
    setHorizontalScrollState(x)
  }

  const handleLeftArrow = () => {
    let x = horizontalScrollState + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setHorizontalScrollState(x)
  }

  return (
    <Container>
      <TitleMovie>{title}</TitleMovie>

      <LeftArrow onClick={handleLeftArrow}>
        <MdOutlineArrowBackIos size={40} />
      </LeftArrow>

      <RightArrow onClick={handleRightArrow}>
        <MdOutlineArrowForwardIos size={40} />
      </RightArrow>


      <MovieRowListarea>
        <MovieRowList style={
          {
            marginLeft: horizontalScrollState,
            width: items.results.length * 150
          }
        }>
          {items.results.length > 0 && items.results.map((item, key) => (
            <MovieRowItem key={item.id} >
              <ImageMovieRowItem src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            </MovieRowItem>
          ))}
        </MovieRowList>
      </MovieRowListarea>
    </Container>
  )
}

export default MovieRow