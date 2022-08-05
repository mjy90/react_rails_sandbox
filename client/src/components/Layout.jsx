import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

import MaterialIcon from './MaterialIcon'

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const links = [
    { title: 'Board Foot Calculator', icon: 'calculator', to: '/boardFootCalculator' },
    { title: 'Species', icon: 'tree', to: '/species' },
    { title: 'Report Price', icon: 'cashMarker', to: '/report' },
  ]

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MaterialIcon color='secondary'>menu</MaterialIcon>
            </IconButton>
            <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List>
                {
                  links.map((link) => (
                    <ListItem key={link.title} disablePadding>
                      <Link key={link.title} to={link.to} style={{ display: 'block' }}>
                        <ListItemButton>
                          <ListItemIcon>
                            <MaterialIcon color='white'>{link.icon}</MaterialIcon>
                          </ListItemIcon>
                          <ListItemText primary={link.title} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))
                }
              </List>
            </Drawer>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              The Wood Database
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  )
}
