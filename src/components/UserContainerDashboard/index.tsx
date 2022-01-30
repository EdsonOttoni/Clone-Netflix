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
  ProfileName
} from './styled'

const UserContainerDashboard = () => {
  return (
    <Container>
      <WrapperProfiles>
        {/* lista */}
        <Profile>
          <ProfileContent>
            <ProfileLink href="/">
              <AvatarWrapper>
                <Avatar></Avatar>
              </AvatarWrapper>
              <ProfileName>Edson Ottoni</ProfileName>
            </ProfileLink>
          </ProfileContent>
        </Profile>

        {/* add */}

        <Profile>
          <ProfileContent>
            <ProfileLink href="/">
              <AvatarWrapper>
                <Avatar></Avatar>
              </AvatarWrapper>
              <ProfileName>Edson Ottoni</ProfileName>
            </ProfileLink>
          </ProfileContent>
        </Profile>
      </WrapperProfiles>
    </Container>
  )
}

export default UserContainerDashboard
