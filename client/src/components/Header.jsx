import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

import MaterialIcon from './MaterialIcon'

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MaterialIcon color='primary'>menu</MaterialIcon>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Calculator Central
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
