import ProjectCard from './ProjectCard'
import { Stack } from '@mui/material'

const projects = [
  {
    title: 'Facebook Clone',
    subtitle: 'Social Network Full-Stack',
    description:
      'Clone funzionale di Facebook con autenticazione, post, like, commenti e feed dinamico.',
    image: '/img.png',
    stack: ['React', 'Node.js', 'Express'],
    repoUrl: 'https://github.com/MMelchiorri/facebook_clone',
  },
  {
    title: 'Todo App',
    subtitle: 'Task Manager Full-Stack',
    description:
      'Applicazione per la gestione delle attività con CRUD completo e backend REST.',
    image: '/img_1.png',
    stack: ['React', 'Node.js', 'MongoDB', 'Docker', 'Redis', 'TypeScript'],
    repoUrl: 'https://github.com/MMelchiorri/todo_app_fe',
  },
]

export default function ProjectsSection() {
  return (
    <Stack
      spacing={4}
      display={'flex'}
      alignItems="center"
      id="myProject"
      sx={{ mb: 6 }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Stack>
  )
}
