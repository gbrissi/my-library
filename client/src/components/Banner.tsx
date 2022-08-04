import React from 'react'

import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material'

import mySiteLogo from '../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

function Banner() {
  return (
    <BannerContainer>
        <SiteLogo data={mySiteLogo} type="image/svg+xml"/>
        <Typography variant='h2' sx={{marginTop: '1rem', color: '#00655d'}}>My Library</Typography>
        <Typography variant='body1' sx={{letterSpacing: '10px', textTransform:'uppercase', color: '#00655d'}}>Public Library</Typography>
    </BannerContainer>
  )
}

const BannerContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 9rem;
    margin-bottom: 6rem;
`

const SiteLogo = styled('object')`
  filter: invert(29%) sepia(38%) saturate(1473%) hue-rotate(134deg) brightness(94%) contrast(103%);
`

export default Banner