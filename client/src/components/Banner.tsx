import React from 'react'

import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material'

import mySiteLogo from '../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

function Banner() {
  return (
    <BannerContainer>
        <SiteLogo data={mySiteLogo} type="image/svg+xml"/>
        <Typography variant='h2' sx={{marginTop: '1rem'}}>My Portfolio</Typography>
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
    color: teal;
`

export default Banner