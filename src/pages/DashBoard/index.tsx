import React from "react";
import UserContainerDashboard from "../../components/UserContainerDashboard";

import {
  Container,
  BtnToEditProfile,
  TextDashboard,
  LogoText,
  Wrapper,
  HeaderDashBoard
} from './styled';

const DashBoard= () => {
  return (
    <Container>
      <HeaderDashBoard>
        <LogoText>Netflix Clone</LogoText>
      </HeaderDashBoard>
      <Wrapper>
        <TextDashboard>Quem está assistindo?</TextDashboard>
        <UserContainerDashboard/>
    
        <BtnToEditProfile>
          Gerenciar perfis
        </BtnToEditProfile>
      </Wrapper>
    </Container>
  )
}

export default DashBoard