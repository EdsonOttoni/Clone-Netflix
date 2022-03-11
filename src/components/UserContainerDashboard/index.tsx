import React from "react"
import { AiOutlinePlusCircle } from 'react-icons/ai'

import {
  Avatar,
  AvatarWrapper,
  WrapperProfiles,
  Container,
  ProfileLink,
  Profile,
  ProfileContent,
  ProfileName,
  Add
} from './styled'

const UserContainerDashboard = () => {
  return (
    <Container>
      <WrapperProfiles>

        <Profile>
          <ProfileContent>
            <ProfileLink to="/browser">
              <AvatarWrapper>
                <Avatar></Avatar>
              </AvatarWrapper>
              <ProfileName>Edson Ottoni</ProfileName>
            </ProfileLink>
          </ProfileContent>
        </Profile>

        <Profile>
          <ProfileContent>
            <ProfileLink to='/'>
              <AvatarWrapper>
                <Add>
                  <AiOutlinePlusCircle size={200} />
                </Add>
              </AvatarWrapper>
              <ProfileName>Adicionar um novo usuário</ProfileName>
            </ProfileLink>
          </ProfileContent>
        </Profile>

      </WrapperProfiles>
    </Container>
  )
}

export default UserContainerDashboard
