import React from 'react'
import {styled} from '@mui/material/styles'
import {Fade, Container, Typography} from '@mui/material'
import Header from '../components/Header'

export default function AboutUs() {
  return (
    <>
        <Header/>
        <Fade in timeout={300}>
            <Container sx={{
                marginTop: '7rem', 
                flexDirection: 'column', 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center',
                padding: '1.5rem',
                ['@media (min-width: 800px)']: {
                    width: '80vw',
                },
                ['@media (min-width: 1200px)']: {
                    width: '65vw',
                },

            }}>
                <Typography sx={{color: 'teal'}} variant='h3'>
                    About <span style={{fontWeight: 'bolder'}}>Us</span>
                </Typography>
                <Typography sx={{marginTop: '2rem'}}variant='body1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem obcaecati unde mollitia similique quibusdam impedit ut nulla recusandae repellendus quo ad accusamus ipsam, magni maiores distinctio voluptates, possimus quisquam.
                    Consequatur dolores, veritatis veniam architecto doloremque asperiores totam quae labore blanditiis, quibusdam officia, aperiam reiciendis. Eligendi obcaecati earum, amet consectetur officiis dignissimos, tempora, atque magni et unde nisi cumque rem?
                    Sunt illo consequuntur doloremque veritatis aut veniam perferendis repellat adipisci, exercitationem incidunt corporis officiis cupiditate. Possimus laboriosam vero quasi placeat rerum, nobis rem ea. Asperiores velit rem animi cumque porro.
                </Typography>
            </Container>
        </Fade>
    </>
  )
}
