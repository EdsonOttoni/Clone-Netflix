import React, { useEffect, useState } from "react";

import { getHomeList, MovieSection, getMovieList } from "../../api/tmdb";
import MovieRow from "../../components/MovieRow";
import FeaturedMovie, { PropsFeaturedMovie } from "../../components/FeaturedMovie";
import icon from '../../assets/the_witcher.svg'
import loadingGif from '../../assets/loading_gif.gif'

import {
  Header,
  NetflixTitleWrapper,
  NetflixTitle,
  IconUserPerfil,
  ContainerList,
  Footnote,
  Loading
} from './styled'

const Browser = () => {

  const [movieListState, setMovieListState] = useState<MovieSection[]>([])
  const [featuredState, setFeaturedState] = useState<PropsFeaturedMovie>()
  const [backgroundHeaderState, setBackgroundHeaderState] = useState(false)

  let blackColorBackgroundHeader = ''

  if (backgroundHeaderState) {
    blackColorBackgroundHeader = '#141414'
  } else {
    blackColorBackgroundHeader = ''
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBackgroundHeaderState(true)
      } else {
        setBackgroundHeaderState(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista dos filmes
      let list = await getHomeList()
      setMovieListState(list)

      // pegando os destaques
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await getMovieList(chosen.id, 'tv')
      setFeaturedState(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <>
      <Header
        style={
          {
            backgroundColor: blackColorBackgroundHeader
          }
        }
      >
        <NetflixTitleWrapper to="/">
          <NetflixTitle>Cl-Netflix</NetflixTitle>
        </NetflixTitleWrapper>
        <IconUserPerfil>
          <a href="/">
            <img src={icon} alt="icon" />
          </a>
        </IconUserPerfil>
      </Header>

      {
        movieListState.length <= 0 && <Loading><img src={loadingGif} alt="loading" /></Loading>
      }

      {
        featuredState && <FeaturedMovie item={featuredState} />
      }

      <ContainerList>
        {
          movieListState.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </ContainerList>

      <Footnote></Footnote>
    </>
  )
}

export default Browser