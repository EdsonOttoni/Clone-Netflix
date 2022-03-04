import { BsPlayFill, BsPlus } from 'react-icons/bs'

import {
  Container,
  HeroVertical,
  HeroHorizontal,
  FeaturedDateFullYear,
  FeaturedName,
  FeaturedNumberOfSeasons,
  FeaturedVoteAverage,
  WrapperInfo,
  FeaturedOverview,
  WrapperButtons,
  WatchButton,
  ListButton,
  FeaturedGenres
} from "./styled"

export type PropsFeaturedMovie = {
  backdrop_path: string
  original_name: string
  vote_average: number
  first_air_date: string
  number_of_seasons: number
  overview: string
  genres: [
    {
      name: string
    }
  ]
}

interface IFutureMovie {
  item: PropsFeaturedMovie
}

const FeaturedMovie = ({ item }: IFutureMovie) => {

  const dateFullYear = new Date(item.first_air_date)
  const genres = []
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  return (
    <Container style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
    }}>
      <HeroVertical>
        <HeroHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <WrapperInfo>
            <FeaturedVoteAverage>{item.vote_average} pontos</FeaturedVoteAverage>
            <FeaturedDateFullYear>{dateFullYear.getFullYear()}</FeaturedDateFullYear>
            <FeaturedNumberOfSeasons>
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </FeaturedNumberOfSeasons>
          </WrapperInfo>
          <FeaturedOverview>{item.overview}</FeaturedOverview>
          <WrapperButtons>
            <WatchButton href="/"><BsPlayFill /> Assistir</WatchButton>
            <ListButton href="/"><BsPlus /> Minha Lista</ListButton>
          </WrapperButtons>
          <FeaturedGenres>
            Gêneros: {genres.join(', ')}
          </FeaturedGenres>
        </HeroHorizontal>
      </HeroVertical>
    </Container>
  )
}

export default FeaturedMovie