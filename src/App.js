import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'






const App = () => {
  return (
    <React.Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6">
            React Redux Counter
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h1" color="initial">30</Typography>
      <ButtonGroup variant="contained" color="secondary">
        <Button>Increment</Button>
        <Button>Decrement</Button>
        <Button>Add by 10</Button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default App