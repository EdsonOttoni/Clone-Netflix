import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

export const Wrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderDashBoard = styled.div`
  padding-top: 1.5rem;
  padding-left: 5rem;
`

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.textColorSecondary};
`

export const TextDashboard = styled.h1`
  font-size: 32px;
  margin-bottom: 52px;
`

export const BtnToEditProfile = styled.button`
  width: 350px;
  height: 50px;
  margin-top: 70px;
  background: transparent;
  color: gray;
  border: 1px solid gray;
  font-size: 22px;

  &:hover {
    border: 1px solid #fff;
    color: #fff;
    transition-duration: 0.3s;
  }
`
