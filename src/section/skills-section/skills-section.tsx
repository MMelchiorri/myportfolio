'use client'

import { Box, Typography, Chip, Stack } from '@mui/material'
import Image from 'next/image'
import styles from './skills.module.css'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Docker',
  'Material UI',
  'Git',
  'REST API',
]

const logos = [
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo/expressjs.svg',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
  '/Users/marco.melchiorri/git/git_marco/myportfolio/public/logo',
]

export default function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: 8 }}>
      {/* TITOLO */}
      <Typography variant="h4" textAlign="center" mb={3}>
        Skills
      </Typography>

      {/* CHIP SKILLS */}
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
        useFlexGap
        mb={5}
      >
        {skills.map((skill) => (
          <Chip key={skill} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>
  )
}
