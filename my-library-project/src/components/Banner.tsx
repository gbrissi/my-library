import React from 'react'

import {styled} from '@mui/material/styles';

import imgLogo from '../images/site-logo.png'
import MenuIcon from '@mui/icons-material/Menu';

function Banner() {
  return (
    <BannerContainer>
        <SiteLogo src={imgLogo}/>
    </BannerContainer>
  )
}

const BannerContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9rem;
    margin-bottom: 6rem;
`

const SiteLogo = styled('img')`
    
`

export default Banner