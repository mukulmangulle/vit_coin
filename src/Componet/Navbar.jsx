import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import React from 'react'

const Navbar = () => {
  return (
       <AppBar position='fixed'>
           <Toolbar>
           <Typography variant='h5' sx={{flexGrow:1}}>
                  Crypto App  
            </Typography>
            <Button variant='contained ' sx={{background:"orange"}} endIcon={<ChangeCircleIcon/>}>Change Theme</Button> 

        
           </Toolbar>
       </AppBar>
  )
}

export default Navbar