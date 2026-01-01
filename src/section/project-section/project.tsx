'use client'

import React from 'react'
import styles from './project.module.css'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { Grid, Card, CardMedia } from '@mui/material'

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={'myProject'}>
      <Grid container className={styles.projectContainer}>
        <Grid
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={8}
        >
          <Card
            sx={{
              display: 'flex',
            }}
          >
            <div>
              <CardMedia
                component="img"
                height="400"
                image="/img.png"
                alt="Todo App Logo"
              />
            </div>
            <div>
              <Typography variant="h4" className={styles.projectTitle}>
                Todo App
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ md: 6 }} className={styles.projectDetails}>
          <Typography variant="body1" className={styles.projectDescription}>
            Applicazione full-stack per la gestione delle attività, sviluppata
            con Node.js, Express, React, MongoDB e Axios. Completamente
            containerizzata con Docker.
          </Typography>

          <a
            href="https://github.com/MMelchiorri/todo_app_fe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visita Repo →
          </a>
        </Grid>
        <Grid size={{ md: 6 }}>
          <Image
            src="/img_1.png"
            alt="Todo App Screenshot"
            className={styles.heroImageRight}
            width={400}
            height={365}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Project
