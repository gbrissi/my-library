import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles, styled} from '@mui/material/styles';
import {AppBar, Button, SwipeableDrawer, Container, Select} from '@mui/material'

import Login from './Login';
import mySiteLogo from '../assets/images/logo.svg'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

//initial variables
var isItSelected = false;

//header component
const Header = () => {

  //open/close login modal
  const [active, setActive] = useState(false)

  //change the stylization of menu icon
  const [isSelected, setIsSelected] = useState(false)

  var checkState = function(arg: boolean) {
    if(arg === false) {
      isItSelected = true;
    } else {
      isItSelected = false;
    }
    return isItSelected;
  }

  return (
    <HeaderContainer variant='outlined'>
      <Content>
        <LogoContainer>
          <SiteLogo data={mySiteLogo} type="image/svg+xml"/>
          <SiteName>My Library</SiteName>
        </LogoContainer>
        <UtilsContainer>
          <SignIn onClick={() => setActive(true)} variant="contained">Sign In</SignIn>
          {active && 
          <div>
            <Modal >
              <NoContainer onClick={() => setActive(false)}></NoContainer>
              <Login/>
            </Modal>
          </div>
          }
          <IconContainer onClick={() => {
            setIsSelected(checkState(isItSelected)), (true)
          }}>
            { isSelected &&
            <div>
              <HamburguerIcon
                icontransform={'translateX(-60px)'}
                iconbackground={'transparent'}
                iconboxshadow={'none'}
                iconbeforetransform={'rotate(45deg) translate(35px, -35px)'}
                iconaftertransform={'rotate(-45deg) translate(35px, 35px)'}
              >
              </HamburguerIcon>   
              <SwipeableDrawer
                sx={{overflow: 'hidden'}} 
                anchor='right'
                open={true}
                onClose={() => {
                  console.log('closed')
                }}
                onOpen={() => {
                  console.log('open')
                }}
              >
                <DrawerContainer>
                  <DrawerItem><CustomLink to='/about-us'><InfoIcon sx={{width:'40px', height:'40px'}}/></CustomLink></DrawerItem>
                  <DrawerItem><CustomLink to='/dashboard'><AdminPanelSettingsIcon sx={{width:'40px', height:'40px'}}/></CustomLink></DrawerItem>
                  <DrawerItem><CustomLink to='/profile'><PersonIcon sx={{width:'40px', height:'40px'}}/></CustomLink></DrawerItem>
                </DrawerContainer>
              </SwipeableDrawer>
            </div>
            }
            { !isSelected &&
              <HamburguerIcon
            >
              </HamburguerIcon>
            }

          </IconContainer>
        </UtilsContainer>
      </Content>
    </HeaderContainer>
  )
}

const NoContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 998;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #0000005e;
    width: 100vw;
    height: 100vh;
`

const Modal = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #0000005e;
    width: 100vw;
    height: 100vh;
`

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
const DrawerContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00423d;
  width: 100px;
  height: 100%;
`

const DrawerItem = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 15px;
  width: 100%;
`

const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all .5s ease-in-out;
`

interface myProps {
  icontransform?: string;
  iconbackground?: string;
  iconboxshadow?: string;
  iconbeforetransform?:  string;
  iconaftertransform?: string;
}

const HamburguerIcon = styled('div')`
  width: 20px;
  height: 2px;
  position: absolute;
  background: #fff;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transform: ${(props: myProps) => props.icontransform};
  background: ${(props: myProps) => props.iconbackground};
  box-shadow: ${(props: myProps) => props.iconboxshadow};
  transition: all .5s ease-in-out;

  ::before {
    transform: translateY(-6px);
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
    transform: ${(props: myProps) => props.iconbeforetransform};
  }

  ::after {
    transform: translateY(6px);
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
    transform: ${(props: myProps) => props.iconaftertransform};
  }

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

const SiteLogo = styled('object')`
  filter: brightness(0) invert(1);
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