import React from 'react';

import {styled} from '@mui/material/styles';

import {AppBar, Button} from '@mui/material'

import mySiteLogo from './images/site-logo-header.png'
import MenuIcon from '@mui/icons-material/Menu';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <LogoContainer>
          <SiteLogo src={mySiteLogo}/>
          <SiteName>MY LIBRARY</SiteName>
        </LogoContainer>
        <UtilsContainer>
          <SignIn variant="contained">Sign In</SignIn>
          <HamburguerIcon></HamburguerIcon>
        </UtilsContainer>
      </Content>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(AppBar)`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00655d;
`

const SignIn = styled(Button)`
    padding: 1px 15px 1px 15px;
    background-color: #434343;
    margin-right: 1.4rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;

    :hover {
      background-color: #262626;
    }
`
const HamburguerIcon = styled(MenuIcon)`
  font-size: 2rem;
  cursor: pointer;
`

const UtilsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  color: white;
  cursor: pointer;
`

const Content = styled('div')`
  align-self: center;
  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 40px;
  width: 85vw;
  @media(max-width: 700px) {
   width : 100vw;
  }
`

const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  color: white;
`

const SiteLogo = styled('img')`
  width: 40px;
  height: 30px;
  margin-right: 0.6rem;
  cursor: pointer;
`

const SiteName = styled('p')`
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  line-height: 1.3rem;
  cursor: pointer;
`

export default Header