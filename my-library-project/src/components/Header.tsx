import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'

import {makeStyles, styled} from '@mui/material/styles';

import {AppBar, Button, SwipeableDrawer, Container, Select} from '@mui/material'

import Login from './Login';
import mySiteLogo from '../assets/images/site-logo-header.png'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

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
    <HeaderContainer>
      <Content>
        <LogoContainer>
          <SiteLogo src={mySiteLogo}/>
          <SiteName>MY LIBRARY</SiteName>
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
                icontransform={'translateX(-50px)'}
                iconbackground={'transparent'}
                iconboxshadow={'none'}
                iconbeforetransform={'rotate(45deg) translate(35px, -35px)'}
                iconaftertransform={'rotate(-45deg) translate(35px, 35px)'}
              >
              </HamburguerIcon>   
              <SwipeableDrawer 
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
                  <DrawerHeading>Menu</DrawerHeading>
                  <DrawerItem to='/potato'>Potato</DrawerItem>
                  <DrawerItem to='/beans'>Beans</DrawerItem>
                  <DrawerItem to='/lettuce'>Lettuce</DrawerItem>
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
const DrawerContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #434343;
  padding: 25px;
  width: 250px;
  height: 100%;
`

const DrawerItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #585858;
  width: 100%;
`

const DrawerHeading = styled('h2')`
  font-size: 1.3rem;
  font-weight: bolder;
  width: 100%;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #585858;
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