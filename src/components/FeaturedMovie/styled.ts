import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
`
export const HeroVertical = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(to top, #111 10%, transparent 98%);
`

export const HeroHorizontal = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(to right, #111 3%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`

export const FeaturedName = styled.div`
  max-width: 70%;
  font-size: 60px;
  font-weight: bold;
`

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`

export const FeaturedVoteAverage = styled.div`
  color: #46d369;
  margin-right: 15px;
`

export const FeaturedDateFullYear = styled.div`
  margin-right: 15px;
`
export const FeaturedNumberOfSeasons = styled.div``

export const FeaturedOverview = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`

export const WrapperButtons = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`
export const WatchButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  text-decoration: none;
  margin-right: 10px;
  border-radius: 4px;
  color: #000;
  background-color: #fff;

  &:hover {
    opacity: 0.7;
  }
`

export const ListButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 25px;
  text-decoration: none;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }
`
export const FeaturedGenres = styled.div`
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`
