'use client'

import {
  Card,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
} from '@mui/material'

type ProjectCardProps = {
  title: string
  subtitle: string
  description: string
  image: string
  stack: string[]
  repoUrl: string
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  stack,
  repoUrl,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        maxWidth: '50%',
        gap: 3,
        p: 2,
        alignItems: 'center',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* IMMAGINE */}
      <CardMedia
        component="img"
        image={image}
        alt={`${title} preview`}
        sx={{
          width: 600,
          height: 500,
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      {/* CONTENUTO */}
      <Box display="flex" flexDirection="column">
        <Typography variant="h5">{title}</Typography>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          {subtitle}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {/* CHIP STACK */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {stack.map((tech) => (
            <Chip key={tech} label={tech} variant="outlined" />
          ))}
        </Stack>

        {/* CTA */}
        <Button
          sx={{
            mt: 2,
            alignSelf: 'center',
            maxWidth: '150px',
          }}
          variant="contained"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita Repo →
        </Button>
      </Box>
    </Card>
  )
}
