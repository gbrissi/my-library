import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles, styled} from '@mui/material/styles';
import {AppBar, Button, SwipeableDrawer, Container, Select, IconButton, Tooltip} from '@mui/material'

import Login from './Login';
import mySiteLogo from '../assets/images/logo.svg'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

//initial variables
var isItSelected = false;

//header component
export default function Header() {

  //open/close login modal
  const [active, setActive] = useState(false)
  //change the stylization of menu icon
  const [isSelected, setIsSelected] = useState(false)
  //hides or open the header when scrolling
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 

  //check if the menu is selected or not to change the stylization
  var checkState = function(arg: boolean) {
    if(arg === false) {
      isItSelected = true;
    } else {
      isItSelected = false;
    }
    return isItSelected;
  }

  //disable scrolling when the modal is active
  const disableScrolling = function(isDisabled: boolean) {
    const body = document.querySelector('body')
    if(isDisabled && body != null) {
      console.log(isDisabled)
      body.style.overflow='hidden'
      console.log('it is supposed to be hidden')
    } else if (!isDisabled && body != null) {
      body.style.overflow='auto'
      console.log('it is supposed to be shown')
    } else {
      console.log('error in searching "body" in DOM')
    }
  }

  //hides the header when scrolling down and shows it when scrolling up
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
  })
  const cls = visible ? {top: "0"} : {top: "-80px"};

  return (
    <>
      <HeaderContainer id='header' position='fixed'>
        <Content>
          <LogoContainer>
            <Link to='/'>
              <SiteLogo>
                <LogoEmbed src={mySiteLogo} type="image/svg+xml"/>
              </SiteLogo>
            </Link>
            <Link style={{textDecoration: 'none', color: '#ffffff'}} to='/'>
              <SiteName>My Library</SiteName>
            </Link>
          </LogoContainer>
          <UtilsContainer>
            <Tooltip title='Profile' sx={{marginRight: '2rem'}}>
              <IconButton onClick={() => setActive(true)}>
                <PersonIcon sx={{color: 'white', fontSize: '1.7rem'}}/>  
              </IconButton>
            </Tooltip>
            {active && 
            <>
              {disableScrolling(true)}
              <Modal>
                <NoContainer onClick={async () => {await setActive(false), disableScrolling(false)}}></NoContainer>
                <Login/>
              </Modal>
            </>
            }
            <IconContainer onClick={() => {
              setIsSelected(checkState(isItSelected))
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
                    <DrawerItem>
                      <Tooltip title='Info'>
                        <IconButton>
                          <CustomLink to='/about-us'><InfoIcon sx={{width:'40px', height:'40px'}}/></CustomLink>
                        </IconButton>
                      </Tooltip>
                    </DrawerItem>
                    <DrawerItem>
                      <Tooltip title='Dashboard'>
                        <IconButton>
                          <CustomLink to='/dashboard'><AdminPanelSettingsIcon sx={{width:'40px', height:'40px'}}/></CustomLink>
                        </IconButton>
                      </Tooltip>
                    </DrawerItem>
                    <DrawerItem>
                      <Tooltip title='Home'>
                        <IconButton>
                          <CustomLink to='/'><HomeIcon sx={{width:'40px', height:'40px'}}/></CustomLink>
                        </IconButton>
                      </Tooltip>
                    </DrawerItem>
                  </DrawerContainer>
                </SwipeableDrawer>
              </div>
              }
              { !isSelected &&
                <Tooltip title='Menu'>
                  <IconButton>
                    <MenuIcon sx={{color: 'white', width: '25px', height: '25px', zIndex: '-1'}}/>
                  </IconButton>
                </Tooltip>
              }
            </IconContainer>
          </UtilsContainer>
        </Content>
      </HeaderContainer>
      <MarginTop/>
    </>
    
  )
}

const MarginTop = styled('div')`
  margin-top: 50px;
`

const NoContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 998;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #00000060;
    width: 100vw;
    height: 100vh;
`

const Modal = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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
  transition: top 0.4s ease-in-out;
`
/*
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
*/

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
  padding: 5px;
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
  z-index: -1;
  background: #fff;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transform: ${(props: myProps) => props.icontransform};
  background: ${(props: myProps) => props.iconbackground};
  box-shadow: ${(props: myProps) => props.iconboxshadow};
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
  pointer-events: none;
`

const LogoEmbed = styled('embed')`
  filter: brightness(0) invert(1);
  width: 40px;
  height: 30px;
  margin-right: 0.6rem;
`

const SiteName = styled('p')`
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  line-height: 1.3rem;
`