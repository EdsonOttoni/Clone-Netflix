import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ImageTheWitcher from '../../assets/the_witcher.svg'

const WIDTH_AVATAR_PROFILE = 200
const HEIGHT_AVATAR_PROFILE = 200
const FONT_SIZE_PROFILE_NAME = 18

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const WrapperProfiles = styled.ul`
  display: flex;
  align-items: center;
`

export const Profile = styled.li`
  position: relative;

  margin-right: 30px;

  &:last-child {
    margin-right: 0px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProfileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;

  &:hover {
    color: white;
    transition-duration: 0.3s;
  }
`

export const AvatarWrapper = styled.div``

export const Avatar = styled.div`
  width: ${WIDTH_AVATAR_PROFILE}px;
  height: ${HEIGHT_AVATAR_PROFILE}px;
  position: relative;
  background-image: url(${ImageTheWitcher});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 8px;
  transition: color;

  &:after {
    content: '';
    display: block;
    border-radius: 8px;
    border: 5px solid transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover&:after {
    border: 5px solid #fff;
    transition-duration: 0.3s;
  }
`

export const Add = styled.div`
  width: ${WIDTH_AVATAR_PROFILE}px;
  height: ${HEIGHT_AVATAR_PROFILE}px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color;

  &:after {
    content: '';
    display: block;
    border-radius: 8px;
    border: 5px solid transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover&:after {
    border: 5px solid #fff;
    transition-duration: 0.3s;
  }
`

export const ProfileName = styled.span`
  font-size: ${FONT_SIZE_PROFILE_NAME}px;
  margin-top: 16px;
`
