import React from 'react'

import {styled} from '@mui/material/styles';

import { Card, Grid, Typography, Chip, Button } from '@mui/material';

export default function Book(props: any) {
  return (
    <BookCard>
        <BookImgContainer>
            <BookImg src={props.image} alt='Book Image'/>
        </BookImgContainer>
        <BookInformation>
            <Title variant='body1'>{props.title} - {props.subtitle}</Title>
            <Subtitle variant='body2'></Subtitle>
            <Author variant='body2'>{props.author}</Author>
        </BookInformation>
        <CustomButton>Redeem</CustomButton>
    </BookCard>  
  )
}

const BookCard = styled(Card)`
    margin: 10px;
    height: 350px;
    background-color: #fefffb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BookInformation = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
`

const BookImgContainer = styled('div')`
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
`

const BookImg = styled('img')`
    padding: 25px;
    max-width: 100%;
    max-height: 100%;
`

const Subtitle = styled(Typography)`
    margin-top: -5px;
    color: #3c3c3c;
    text-align: center;
    font-weight: 500;
`

const Title = styled(Typography)`
    text-align: center;
    color: #3c3c3c;
    font-weight: bolder;
`

const Author = styled(Typography)`
    text-align: center;
    margin-top: 5px;
    color: #505050;
`

const CustomButton = styled(Button)`
    background-color: #00655d;
    width: 90%;
    padding: 10px 0;
    margin-bottom: 15px;
    color: white;
    :hover {
        background-color: #058181;
    }
`